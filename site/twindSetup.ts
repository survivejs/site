import * as twindColors from "https://cdn.skypack.dev/twind@0.16.16/colors?min";
import twindTypography from "https://cdn.skypack.dev/@twind/typography@0.0.2?min";

export default {
  theme: { extend: { colors: twindColors } },
  plugins: {
    ...twindTypography(),
  },
};
