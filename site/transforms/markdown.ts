import { marked } from "https://unpkg.com/marked@4.0.0/lib/marked.esm.js";
import { tw } from "https://cdn.skypack.dev/twind@0.16.16?min";
import highlight from "https://unpkg.com/@highlightjs/cdn-assets@11.3.1/es/core.min.js";
import highlightBash from "https://unpkg.com/highlight.js@11.3.1/es/languages/bash";
import highlightJS from "https://unpkg.com/highlight.js@11.3.1/es/languages/javascript";
import highlightJSON from "https://unpkg.com/highlight.js@11.3.1/es/languages/json";
import highlightXML from "https://unpkg.com/highlight.js@11.3.1/es/languages/xml";
import highlightTS from "https://unpkg.com/highlight.js@11.3.1/es/languages/typescript";
import highlightYAML from "https://unpkg.com/highlight.js@11.3.1/es/languages/yaml";
import highlightHaskell from "https://unpkg.com/highlight.js@11.3.1/es/languages/haskell";
import highlightMarkdown from "https://unpkg.com/highlight.js@11.3.1/es/languages/markdown";
import highlightCSS from "https://unpkg.com/highlight.js@11.3.1/es/languages/css";
import highlightSQL from "https://unpkg.com/highlight.js@11.3.1/es/languages/sql";
import highlightC from "https://unpkg.com/highlight.js@11.3.1/es/languages/c";

highlight.registerLanguage("bash", highlightBash);
highlight.registerLanguage("javascript", highlightJS);
highlight.registerLanguage("js", highlightJS);
highlight.registerLanguage("json", highlightJSON);
highlight.registerLanguage("typescript", highlightTS);
highlight.registerLanguage("ts", highlightTS);
highlight.registerLanguage("yaml", highlightYAML);
highlight.registerLanguage("html", highlightXML);
highlight.registerLanguage("xml", highlightXML);
highlight.registerLanguage("haskell", highlightHaskell);
highlight.registerLanguage("markdown", highlightMarkdown);
highlight.registerLanguage("css", highlightCSS);
highlight.registerLanguage("sql", highlightSQL);
highlight.registerLanguage("c", highlightC);
highlight.registerLanguage("clike", highlightC);

marked.setOptions({
  gfm: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: true,
  highlight: (code: string, language: string) => {
    return language ? highlight.highlight(code, { language }).value : code;
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

  return { content: marked.parser(parseQuotes(input)), tableOfContents };
}

function parseQuotes(data: string) {
  const tokens = marked.lexer(data).map((t) => {
    if (t.type === "paragraph") {
      return (
        parseCustomQuote(t, "T>", "tip") ||
        parseCustomQuote(t, "W>", "warning") ||
        t
      );
    }

    return t;
  });
  // @ts-ignore Skip
  tokens.links = [];

  return tokens;
}

// @ts-ignore Skip
function parseCustomQuote(token, match, className) {
  if (token.type === "paragraph") {
    const text = token.text;

    if (text.indexOf(match) === 0) {
      const icon = className === "tip"
        ? "icon-attention-circled"
        : "icon-attention";

      return {
        type: "html",
        text: `<blockquote class="${
          className === "tip" ? "bg-teal-50" : "bg-red-50"
        }"><i class="${icon}"></i>${
          marked.parseInline(
            text
              .slice(2)
              .trim(),
          )
        }</blockquote>`,
      };
    }
  }

  return null;
}

export default transformMarkdown;
