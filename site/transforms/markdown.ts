import { install, tw } from "https://esm.sh/@twind/core@1.1.1";
import { marked } from "https://unpkg.com/marked@9.1.5/lib/marked.esm.js";
import highlight from "https://unpkg.com/@highlightjs/cdn-assets@11.9.0/es/core.min.js";
import highlightBash from "https://unpkg.com/highlight.js@11.9.0/es/languages/bash";
import highlightC from "https://unpkg.com/highlight.js@11.9.0/es/languages/c";
import highlightCSS from "https://unpkg.com/highlight.js@11.9.0/es/languages/css";
import highlightHaskell from "https://unpkg.com/highlight.js@11.9.0/es/languages/haskell";
import highlightJS from "https://unpkg.com/highlight.js@11.9.0/es/languages/javascript";
import highlightJSON from "https://unpkg.com/highlight.js@11.9.0/es/languages/json";
import highlightMarkdown from "https://unpkg.com/highlight.js@11.9.0/es/languages/markdown";
import highlightSQL from "https://unpkg.com/highlight.js@11.9.0/es/languages/sql";
import highlightTS from "https://unpkg.com/highlight.js@11.9.0/es/languages/typescript";
import highlightXML from "https://unpkg.com/highlight.js@11.9.0/es/languages/xml";
import highlightYAML from "https://unpkg.com/highlight.js@11.9.0/es/languages/yaml";
import type { LoadApi } from "https://deno.land/x/gustwind@v0.66.2/types.ts";
import twindSetup from "../twindSetup.ts";

highlight.registerLanguage("bash", highlightBash);
highlight.registerLanguage("c", highlightC);
highlight.registerLanguage("clike", highlightC);
highlight.registerLanguage("css", highlightCSS);
highlight.registerLanguage("haskell", highlightHaskell);
highlight.registerLanguage("html", highlightXML);
highlight.registerLanguage("javascript", highlightJS);
highlight.registerLanguage("js", highlightJS);
highlight.registerLanguage("json", highlightJSON);
highlight.registerLanguage("markdown", highlightMarkdown);
highlight.registerLanguage("sql", highlightSQL);
highlight.registerLanguage("typescript", highlightTS);
highlight.registerLanguage("ts", highlightTS);
highlight.registerLanguage("xml", highlightXML);
highlight.registerLanguage("yaml", highlightYAML);

marked.setOptions({
  gfm: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: true,
  highlight: (code: string, language: string) => {
    try {
      // TODO: Is it a good idea to highlight as bash by default?
      return highlight.highlight(code, { language: language || "bash" }).value;
    } catch (error) {
      console.error("Missing a known language for", code);
      console.error(error);
    }
  },
});

install(twindSetup);

function getTransformMarkdown(load: LoadApi) {
  return function transformMarkdown(input: string) {
    if (typeof input !== "string") {
      console.error("input", input);
      throw new Error("transformMarkdown - passed wrong type of input");
    }

    // https://github.com/markedjs/marked/issues/545
    const tableOfContents: { slug: string; level: number; text: string }[] = [];

    // https://marked.js.org/using_pro#renderer
    // https://github.com/markedjs/marked/blob/master/src/Renderer.js
    marked.use({
      renderer: {
        code(code: string, infostring: string): string {
          const lang = ((infostring || "").match(/\S*/) || [])[0];

          // @ts-ignore How to type this?
          if (this.options.highlight) {
            // @ts-ignore How to type this?
            const out = this.options.highlight(code, lang);

            if (out != null && out !== code) {
              code = out;
            }
          }

          code = code.replace(/\n$/, "") + "\n";

          if (!lang) {
            return "<pre><code>" +
              code +
              "</code></pre>\n";
          }

          return '<pre class="' +
            tw`overflow-auto -mx-4 md:mx-0 bg-gray-100` +
            '"><code class="' +
            // @ts-ignore How to type this?
            (this.options.langPrefix || "") +
            lang +
            '">' +
            code +
            "</code></pre>\n";
        },
        heading(
          text: string,
          level: number,
          raw: string,
        ) {
          const slug = slugify(raw);

          tableOfContents.push({ slug, level, text });

          return '<a href="#' + slug + '"><h' +
            level +
            ' class="' + tw`inline` + '"' +
            ' id="' +
            slug +
            '">' +
            text +
            "</h" +
            level +
            ">" +
            "</a>\n";
        },
        image(href: string, title: string, text: string) {
          const textParts = text ? text.split("|") : [];
          const alt = textParts[0] || "";
          const width = textParts[1] || "";
          const height = textParts[2] || "";
          const className = textParts[3] || "";

          return `<img src="${href}" alt="${alt}" class="${
            tw(className)
          }" width="${width}" height="${height}" />`;
        },
        link(href: string, title: string, text: string) {
          if (href === null) {
            return text;
          }

          if (text === "<file>") {
            // TODO: Show a nice error in case href is not found in the fs
            const fileContents = load.textFileSync(href);

            return this.code(fileContents, href.split(".").at(-1) as string);
          }

          let out = '<a class="' + tw("underline") + '" href="' + href + '"';
          if (title) {
            out += ' title="' + title + '"';
          }
          out += ">" + text + "</a>";
          return out;
        },
        list(body: string, ordered: string, start: number) {
          const type = ordered ? "ol" : "ul",
            startatt = (ordered && start !== 1)
              ? (' start="' + start + '"')
              : "",
            klass = ordered
              ? "list-decimal list-inside"
              : "list-disc list-inside";
          return "<" + type + startatt + ' class="' + tw(klass) + '">\n' +
            body +
            "</" +
            type + ">\n";
        },
      },
    });

    return { content: marked(input), tableOfContents };
  };
}

function slugify(idBase: string) {
  return idBase
    .toLowerCase()
    .replace(/`/g, "")
    .replace(/[^\w]+/g, "-");
}

export default getTransformMarkdown;
