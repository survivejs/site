import {
  extract,
  test,
} from "https://deno.land/std@0.207.0/front_matter/yaml.ts";
import { parse } from "https://deno.land/std@0.207.0/yaml/parse.ts";
import removeMarkdown from "https://esm.sh/remove-markdown@0.3.0";
import getMarkdown from "./transforms/markdown.ts";
import { getMemo } from "https://deno.land/x/gustwind@v0.66.3/utilities/getMemo.ts";
import trimStart from "https://deno.land/x/lodash@4.17.15-es/trimStart.js";
import type { LoadApi } from "https://deno.land/x/gustwind@v0.66.3/types.ts";

type MarkdownWithFrontmatter = {
  data: {
    // In this project, slug is derived from path automatically
    slug: string;
    title: string;
    date: Date;
    author?: { name: string; twitter: string };
    description?: string;
    preview?: string;
    keywords: string[];
  };
  content: string;
};

type Topic = {
  title: string;
  posts: MarkdownWithFrontmatter[];
  slug: string;
};

// TODO: Check if resolveBlogPost needs to be applied for individual blog posts separately
function init({ load }: { load: LoadApi }) {
  const markdown = getMarkdown(load);

  async function indexBook(directory: string) {
    const chapters =
      (await indexMarkdown(directory, { parseHeadmatter: false })).map((c) => ({
        ...c,
        slug: cleanChapterName(c.path),
      }));

    chapters.sort((a, b) => getIndex(a.name) - getIndex(b.name));

    // TODO: attach descriptions + attach keywords
    // TODO: fix image paths when rendering markdown files

    return generateAdjacent(chapters);
  }

  async function indexBlog(directory: string) {
    const blogFiles =
      (await indexMarkdown(directory, { parseHeadmatter: true })).map((p) => ({
        ...p,
        data: resolveBlogPost(p.path, p),
      }));

    blogFiles.sort((a, b) => getIndex(a.name) - getIndex(b.name));

    return generateAdjacent(blogFiles);
  }

  async function indexTopics(directory: string): Promise<Topic[]> {
    const blogFiles = await indexMarkdown(directory, { parseHeadmatter: true });
    const keywords: Record<string, MarkdownWithFrontmatter[]> = {};

    await Promise.all(blogFiles.map(async ({ path }) => {
      const p = await parseHeadmatter(path);

      p.data.keywords?.forEach((keyword: string) => {
        if (keywords[keyword]) {
          keywords[keyword].push({ ...p, data: resolveBlogPost(path, p) });
        } else {
          keywords[keyword] = [{ ...p, data: resolveBlogPost(path, p) }];
        }
      });
    }));

    const keywordsArray = Object.keys(keywords);

    keywordsArray.sort();

    return keywordsArray.map((topic) => ({
      title: resolveKeywordToTitle(topic),
      posts: keywords[topic],
      slug: cleanSlug(topic),
    }));
  }

  function processTopic(t: Topic) {
    return t;
  }

  async function indexMarkdown(
    directory: string,
    o: { parseHeadmatter: boolean },
  ) {
    const files = await load.dir({
      path: directory,
      extension: ".md",
      type: "",
    });

    return Promise.all(
      files.map(async ({ path, name }) => ({
        ...(o.parseHeadmatter ? await parseHeadmatter(path) : {}),
        path,
        name,
      })),
    );
  }

  function getIndex(str: string) {
    return parseInt(str.split("-")[0], 10);
  }

  function generateAdjacent(pages: unknown[]) {
    return pages.map((page, i) => {
      // Avoid mutation
      const ret = structuredClone(page);

      // @ts-expect-error This is fine
      ret.next = i > 0 && pages[i - 1];
      // @ts-expect-error This is fine
      ret.previous = i < pages.length - 1 && pages[i + 1];

      return ret;
    });
  }

  async function processMarkdown(
    { path }: { path: string },
    o?: { parseHeadmatter: boolean; skipFirstLine: boolean },
  ) {
    if (o?.parseHeadmatter) {
      const headmatter = await parseHeadmatter(path);

      return {
        ...headmatter,
        ...(await parseMarkdown(headmatter.content)),
      };
    }

    // Markdown also parses toc but it's not needed for now
    return parseMarkdown(await load.textFile(path), o);
  }

  async function parseHeadmatter(
    path: string,
  ): Promise<MarkdownWithFrontmatter> {
    const file = await load.textFile(path);

    if (test(file)) {
      const { frontMatter, body: content } = extract(file);
      const slug = cleanSlug(path);

      return {
        // TODO: It would be better to handle this with Zod or some other runtime checker
        data: {
          ...parse(frontMatter) as MarkdownWithFrontmatter["data"],
          slug,
        },
        content,
      };
    }

    throw new Error(`path ${path} did not contain a headmatter`);
  }

  // Interestingly enough caching to fs doesn't result in a speedup
  // TODO: Investigate why not
  // const fs = await fsCache(path.join(Deno.cwd(), ".gustwind"));
  const memo = getMemo(new Map());
  function parseMarkdown(lines: string, o?: { skipFirstLine: boolean }) {
    const input = o?.skipFirstLine
      ? lines.split("\n").slice(1).join("\n")
      : lines;

    return memo(markdown, input);
  }

  return {
    indexBlog,
    indexBook,
    indexMarkdown,
    indexTopics,
    processMarkdown,
    processTopic,
  };
}

function resolveKeywordToTitle(keyword: string) {
  switch (keyword) {
    case "ajax":
      return "AJAX";
    case "api":
      return "API";
    case "baas":
      return "BaaS";
    case "ci":
      return "Continuous Integration";
    case "cli":
      return "Command Line Interface";
    case "cssinjs":
      return "css-in-js";
    case "ecommerce":
      return "E-commerce";
    case "json":
      return "JSON";
    case "react native":
      return "React Native";
    case "javascript":
      return "JavaScript";
    case "typescript":
      return "TypeScript";
    case "graphql":
      return "GraphQL";
    case "npm":
      return "npm";
    case "survivejs":
      return "SurviveJS";
    case "nodejs":
      return "NodeJS";
    case "rxjs":
      return "RxJS";
    case "reasonml":
      return "ReasonML";
    default:
      return (keyword[0].toUpperCase() + keyword.slice(1)).replace(/-/g, " ");
  }
}

function resolveBlogPost(path: string, p: MarkdownWithFrontmatter) {
  const preview = generatePreview(p.content, 150);

  return {
    ...p.data,
    description: p.data?.description || p.data?.preview || preview,
    // TODO
    images: {}, // resolveImages(p.data?.headerImage),
    slug: cleanSlug(path),
    preview,
    author: p.data?.author || {
      name: "Juho Vepsäläinen",
      twitter: "https://twitter.com/bebraw",
    },
    topics: p.data?.keywords?.map((keyword: string) => {
      return {
        title: resolveKeywordToTitle(keyword),
        slug: keyword,
      };
    }) || [],
  };
}

function cleanSlug(resourcePath: string) {
  const parts = resourcePath.split("/");
  const end =
    trimStart(parts.slice(-1)[0], "0123456789-_", undefined).split(".")[0];

  return end.toLowerCase()
    .replace(/ /g, "-")
    .replace(/_/g, "-");
}

// TODO
/*
function resolveImages(headerImage?: string) {
  if (!headerImage) {
    return { header: "", thumbnail: "" };
  }

  // @ts-expect-error Error is expected as headerImage isn't strict enough and
  // we validate it in runtime.
  const image = images[headerImage];
  if (!image) {
    throw new Error("Failed to find a matching image for " + headerImage);
  }

  return {
    header: config.meta.imagesEndpoint + `?image=${image}&type=public`,
    thumbnail: config.meta.imagesEndpoint + `?image=${image}&type=thumb`,
  };
}
*/

function generatePreview(content: string, amount: number) {
  return `${removeMarkdown(content).slice(0, amount)}…`;
}

function cleanChapterName(path: string) {
  const parts = path.split("/");
  const beginning = parts.slice(0, -1);
  const end = trimStart(parts.slice(-1)[0], "0123456789-_", undefined);

  return beginning
    .concat(end)
    .join("/")
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/_/g, "-");
}

export { init };
