const space = 8;
const scaleBase = 12;
const scaleRatio = 1.3;

module.exports = {
  font: {
    heading: '"Avenir Next", "Helvetica Neue", sans-serif',
    body: '"Lora", "Merriweather", "Georgia", serif',
    small: '"Avenir Next", "Helvetica Neue", sans-serif',
    code:
      '"Input Sans Narrow", "Source Code Pro", "Input Sans", "Inconsolata", monospace',
  },
  fontWeight: {
    normal: 400,
    bold: 600,
    fat: 700,
  },
  fontSize: {
    alpha: `${scaleBase * Math.pow(scaleRatio, 5)}px`,
    beta: `${scaleBase * Math.pow(scaleRatio, 4)}px`,
    gamma: `${scaleBase * Math.pow(scaleRatio, 3)}px`,
    delta: `${scaleBase * Math.pow(scaleRatio, 2)}px`,
    epsilon: `${scaleBase * Math.pow(scaleRatio, 1)}px`,
    zeta: `${scaleBase * Math.pow(scaleRatio, 0)}px`,
  },
  space: {
    xxs: `${space / 4}px`,
    xs: `${space / 2}px`,
    s: `${space}px`,
    m: `${space * 2}px`,
    l: `${space * 4}px`,
    xl: `${space * 8}px`,
    xxl: `${space * 16}px`,
  },
  color: {
    base: "#222",
    heading: "#222",
    quiet: "#999",
    inverted: "#ccc",
    background: "#fff",
    backgroundAlt: "#eee",
    backgroundLight: "#fafafa",
    brandDark: "#434343",
    backgroundTip: "#f5fffb",
    action: "#6eedf8",
    actionAlpha: "rgba(110, 237, 248, 0.2)",
    actionLight: "#0de1f3",
    actionDark: "#09b5c4",
  },
  border: {
    width: "2px",
  },
  form: {
    size: "52px",
  },
  transition: {
    speed: "0.3s",
    easing: "cubic-bezier(.23, 1, .32, 1)",
  },
  breakpoint: {
    s: "500px",
    m: "650px",
    l: "1150px",
    xl: "1350px",
  },
};
