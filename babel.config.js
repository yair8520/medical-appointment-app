module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            '@': './src',
            '@screens': './src/screens',
            '@components': './src/components',
            '@utils': './src/utils',
            '@services': './src/services',
            '@types': './src/types',
            '@types/store': './src/types/store',
            '@constants': './src/constants',
            '@navigation': './src/navigation',
            '@hooks': './src/hooks',
            '@store': './src/store',
          },
        },
      ],
    ],
  };
};
