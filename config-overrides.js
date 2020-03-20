/* eslint-disable no-useless-computed-key */
const { override,
  addDecoratorsLegacy, 
  addWebpackAlias,
  addLessLoader,
  useEslintRc,
  fixBabelImports } = require('customize-cra');
const path = require("path");

const paths = require('react-scripts/config/paths');
paths.appBuild = path.join(path.dirname(paths.appBuild), 'dist');  // 修改打包目录

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  // enable legacy decorators babel plugin
  addDecoratorsLegacy(),
  useEslintRc(),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { "@primary-color": "#4F88FE" },
  }),
  // add an alias for "ag-grid-react" imports
  addWebpackAlias({
    ["@root"]: path.resolve(__dirname, "src/"),
  }),
);