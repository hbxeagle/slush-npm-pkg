module.exports = {
  output: {
    libraryTarget: "umd",
    library:"<%= name %>"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};