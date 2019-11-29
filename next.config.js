const assetPrefix = process.env.ASSET_PREFIX || '';

module.exports = {
  assetPrefix,

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
