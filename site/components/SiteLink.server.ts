import type { Routes } from "https://deno.land/x/gustwind@v0.66.2/types.ts";

function init({ routes }: { routes: Routes }) {
  function validateUrl(url: string) {
    if (!url) {
      return;
    }

    return url;

    // TODO: Restore url checks
    /*
    const [urlRoot, anchor] = url.split("#");

    if (Object.keys(routes).includes(urlRoot)) {
      return urlRoot === "/"
        ? url
        : `/${urlRoot}${anchor ? "#" + anchor : "/"}`;
    }

    // TODO: This would be a good spot to check the url doesn't 404
    // To keep this fast, some kind of local, time-based cache would
    // be good to have to avoid hitting the urls all the time.
    if (url.startsWith("http")) {
      return url;
    }

    throw new Error(
      `Failed to find matching url for "${url}" from ${
        Object.keys(routes).join(", ")
      }`,
    );
    */
  }

  return { validateUrl };
}

export { init };
