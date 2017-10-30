const path = require("path");
const webpack = require("webpack");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require("webpack-merge");
const autoprefixer = require("autoprefixer");

module.exports = env => {
  switch (env) {
    case "build":
      return merge(commonConfig(), buildConfig());
    case "interactive":
      return merge(commonConfig(), interactiveConfig());
    case "start":
    default:
      return merge(commonConfig(), developmentConfig());
  }
};

function commonConfig() {
  return {
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          use: "babel-loader",
          include: [
            path.join(__dirname, "components"),
            path.join(__dirname, "layouts"),
            path.join(__dirname, "pages"),
          ],
        },
        {
          test: /\.woff$/,
          use:
            "url-loader?prefix=font/&limit=5000&mimetype=application/font-woff",
        },
        {
          test: /\.ttf$|\.eot$/,
          use: "file-loader?prefix=font/",
        },
        {
          test: /\.gif$/,
          use: "file-loader",
        },
        {
          test: /\.jpg$/,
          use: "file-loader",
        },
        {
          test: /\.png$/,
          use: "file-loader",
        },
        {
          test: /\.svg$/,
          use: "raw-loader",
        },
        {
          test: /\.txt$/,
          use: "raw-loader",
        },
        {
          test: /\.md$/,
          use: "page-loader",
        },
      ],
    },
    resolve: {
      alias: {
        assets: path.resolve(__dirname, "assets"),
        books: path.resolve(__dirname, "books"),
      },
    },
    resolveLoader: {
      alias: {
        "page-loader": path.resolve(__dirname, "loaders/page-loader.js"),
      },
    },
  };
}

function interactiveConfig() {
  return {
    resolve: {
      alias: {
        react: "preact-compat/dist/preact-compat.min.js",
        "react-dom": "preact-compat/dist/preact-compat.min.js",
      },
    },
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
        },
      }),
    ],
  };
}

function developmentConfig() {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [
                  autoprefixer({ browsers: ["last 2 versions"] }),
                ],
              },
            },
            "sass-loader",
          ],
        },
      ],
    },
  };
}

function buildConfig() {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: "css-loader",
            fallback: "style-loader",
          }),
        },
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              "css-loader",
              {
                loader: "postcss-loader",
                options: {
                  plugins: () => [
                    autoprefixer({ browsers: ["last 2 versions"] }),
                  ],
                },
              },
              "sass-loader",
            ],
          }),
        },
      ],
    },
    plugins: [
      new ExtractTextPlugin({
        filename: "[name].[chunkhash].css",
        allChunks: true,
      }),
      new CleanWebpackPlugin(["build"]),
    ],
  };
}
