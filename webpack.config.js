module.exports = {
  entry: "./scripts/index.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    loaders: [{loaders: ["babel"]}]
  }
};
