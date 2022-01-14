import { marked } from "https://unpkg.com/marked@4.0.0/lib/marked.esm.js";
import { tw } from "https://cdn.skypack.dev/twind@0.16.16?min";
import highlight from "https://unpkg.com/@highlightjs/cdn-assets@11.3.1/es/core.min.js";
import highlightBash from "https://unpkg.com/highlight.js@11.3.1/es/languages/bash";
import highlightJS from "https://unpkg.com/highlight.js@11.3.1/es/languages/javascript";
import highlightJSON from "https://unpkg.com/highlight.js@11.3.1/es/languages/json";
import highlightTS from "https://unpkg.com/highlight.js@11.3.1/es/languages/typescript";
import highlightYAML from "https://unpkg.com/highlight.js@11.3.1/es/languages/yaml";

highlight.registerLanguage("bash", highlightBash);
highlight.registerLanguage("javascript", highlightJS);
highlight.registerLanguage("js", highlightJS);
highlight.registerLanguage("json", highlightJSON);
highlight.registerLanguage("typescript", highlightTS);
highlight.registerLanguage("ts", highlightTS);
highlight.registerLanguage("yaml", highlightYAML);

marked.setOptions({
  gfm: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: true,
  highlight: (code: string, language: string) => {
    return highlight.highlight(code, { language }).value;
  },
});

function transformMarkdown(input: string) {
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
          this.options.langPrefix +
          lang +
          '">' +
          code +
          "</code></pre>\n";
      },
      heading(
        text: string,
        level: number,
        raw: string,
        slugger: { slug: (s: string) => string },
      ) {
        const slug = slugger.slug(raw);

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
      link(href: string, title: string, text: string) {
        if (href === null) {
          return text;
        }
        let out = '<a class="' + tw`underline` + '" href="' + href + '"';
        if (title) {
          out += ' title="' + title + '"';
        }
        out += ">" + text + "</a>";
        return out;
      },
      list(body: string, ordered: string, start: number) {
        const type = ordered ? "ol" : "ul",
          startatt = (ordered && start !== 1) ? (' start="' + start + '"') : "",
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
}

export default transformMarkdown;
