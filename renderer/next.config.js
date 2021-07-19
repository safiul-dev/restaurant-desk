module.exports = {
  webpack: (config) => Object.assign(config, {
    target: 'electron-renderer',
  }),
  env: {
    customKey: 'my-value',
  },
};
