module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '@domain': '../domain',
            '@infrastructure': '../infrastructure',
          },
        },
      ],
      [
        "module:react-native-dotenv", {
            "moduleName": "react-native-dotenv",
            "path": ".env"
        }
    ],
   ],
  };
};
