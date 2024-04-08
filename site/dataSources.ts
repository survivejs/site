import type { LoadApi } from "https://deno.land/x/gustwind@v0.52.3/types.ts";
import getMarkdown from "./transforms/markdown.ts";

function init({ load }: LoadApi) {
  const markdown = getMarkdown(load);

  async function processMarkdown(
    filename: string,
    o?: { skipFirstLine: boolean },
  ) {
    // Drop title from the first line
    // This is not cleanest solution since sometimes you have something else there!
    // TODO: It would be better to check for the existence of # before removing the line
    const lines = await load.textFile(filename);

    return markdown(
      o?.skipFirstLine ? lines.split("\n").slice(1).join("\n") : lines,
    );
  }

  return { processMarkdown };
}

export { init };
