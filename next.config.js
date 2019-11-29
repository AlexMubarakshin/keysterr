const assetPrefix = process.env.PAGES_ASSET_PREFIX || '';
const backendUrl = process.env.PAGES_BACKEND_URL || '';

module.exports = {
  assetPrefix,
  'process.env.BACKEND_URL': backendUrl,

  exportPathMap: function () {
    return {
      '/': { page: '/' },
    };
  },

  webpack: (config, { isServer, webpack }) => {
    config.plugins.push(new webpack.DefinePlugin({
      __CLIENT__: !isServer,
      __SERVER__: isServer,
    }));

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(assetPrefix),
      }),
    );

    return config;
  },
};
