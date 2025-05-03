//// add to project 

yarn add -D webpack-bundle-analyzer

/// import headers 
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

/// inside plugin []
new BundleAnalyzerPlugin()

Stat size is the size of the input, after webpack bundling but before optimizations like minification
Parsed size is the size of the file on disk (after minification). It is the effective size of the JavaScript code parsed by the client browser
gzip size is the size of the file after gzip (most likely the effective content size transmitted over the network)