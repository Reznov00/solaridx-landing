module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@enums': './src/enums',
          '@themes': './src/themes',
          '@utilities': './src/utilities',
          '@constants': './src/constants',
          '@store': './src/store',
          '@services': './src/services',
        },
      },
    ],
    'react-native-reanimated/plugin'
  ],
};
