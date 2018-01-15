module.exports = function replacePlugin({ start, end, className }) {
  const startReplacement = `_${start
    .replace(new RegExp("-", "g"), "_")
    .toUpperCase()}`;
  const endReplacement = `_${end
    .replace(new RegExp("-", "g"), "_")
    .toUpperCase()}`;

  return addHook => {
    addHook("before-highlight", env => {
      env.code = env.code
        .replace(new RegExp(start, "gi"), startReplacement)
        .replace(new RegExp(end, "gi"), endReplacement);
    });

    addHook("after-highlight", env => {
      env.highlightedCode = env.highlightedCode
        .replace(
          new RegExp(startReplacement, "g"),
          `<div class="${className}">`
        )
        .replace(new RegExp(endReplacement, "g"), "</div>");
    });
  };
};
