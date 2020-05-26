const merge = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const baseWebpackConfig = require("./webpack.base.conf");

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  plugins: [new BundleAnalyzerPlugin()],
});

module.exports = Promise.resolve(buildWebpackConfig);
