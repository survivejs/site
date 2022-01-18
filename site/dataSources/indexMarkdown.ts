import * as path from "https://deno.land/std@0.113.0/path/mod.ts";
import { parse } from "https://deno.land/x/frontmatter/mod.ts";
import cloneDeep from "https://deno.land/x/lodash@4.17.15-es/cloneDeep.js";
import trimStart from "https://deno.land/x/lodash@4.17.15-es/trimStart.js";
import removeMarkdown from "https://esm.sh/remove-markdown@0.3.0";

type MarkdownWithFrontmatter = {
  data: {
    slug: string;
    title: string;
    date: Date;
    keywords: string[];
  };
  content: string;
};

async function indexMarkdown(directory: string) {
  const files = await dir(directory, ".md");

  files.sort((a, b) => getIndex(b.name) - getIndex(a.name));

  const ret = await Promise.all(
    files.map(({ path }) =>
      Deno.readTextFile(path).then(
        (d) => {
          const p = parse(d);

          return {
            ...p,
            data: {
              // @ts-ignore data is there
              ...p.data,
              slug: cleanSlug(path),
              preview: generatePreview(p.content, 100),
            },
          } as MarkdownWithFrontmatter;
        },
      )
    ),
  );

  return generateAdjacent(ret);
}

function getIndex(str: string) {
  return parseInt(str.split("-")[0], 10);
}

async function dir(p: string, extension?: string) {
  const ret = [];

  for await (const { name } of Deno.readDir(p)) {
    if (extension) {
      if (path.extname(name) === extension) {
        ret.push({ path: path.join(p, name), name });
      }
    } else {
      ret.push({ path: path.join(p, name), name });
    }
  }

  return ret;
}

function cleanSlug(resourcePath: string) {
  const parts = resourcePath.split("/");
  const end =
    trimStart(parts.slice(-1)[0], "0123456789-_", undefined).split(".")[0];

  return end.toLowerCase()
    .replace(/ /g, "-")
    .replace(/_/g, "-");
}

function generateAdjacent(pages: unknown[]) {
  return pages.map((page, i) => {
    const ret = cloneDeep(page); // Avoid mutation

    ret.previous = i > 0 && pages[i - 1];
    ret.next = i < pages.length - 1 && pages[i + 1];

    return ret;
  });
}

function generatePreview(content: string, amount: number) {
  return `${removeMarkdown(content).slice(0, amount)}…`;
}

export default indexMarkdown;
