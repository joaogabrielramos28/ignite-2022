module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@model": "./src/model",
            "@assets": "./src/app/assets",
            "@components": "./src/app/components",
            "@theme": "./src/app/theme",
            "@storage": "./src/app/storage",
            "@utils": "./src/app/utils",
            "@infra": "./src/infra",
            "@hooks": "./src/app/hooks",
            "@routes": "./src/app/routes",
            "@flows": "./src/app/flows",
            "@providers": "./src/app/providers",
            "@ts": "./src/app/ts",
          },
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
