import * as path from "https://deno.land/std@0.113.0/path/mod.ts";
import { parse } from "https://deno.land/x/frontmatter/mod.ts";
import trimStart from "https://deno.land/x/lodash@4.17.15-es/trimStart.js";

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

  return Promise.all(
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
            },
          } as MarkdownWithFrontmatter;
        },
      )
    ),
  );
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

export default indexMarkdown;
