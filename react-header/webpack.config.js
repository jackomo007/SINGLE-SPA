const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "angel47",
    projectName: "react-header",
    webpackConfigEnv,
    argv,
  });
 
  return merge(defaultConfig, {
    externals: ['react-router-dom'],
  });
};
