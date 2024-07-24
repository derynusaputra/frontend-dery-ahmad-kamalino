module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    //if you already have other plugin just paste this lines below
    "react-native-reanimated/plugin",
    [
      "module-resolver",
      {
        root: ["./app"],
        // extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          "@app": "./app",
          "@components": ["./app/components"],
        },
      },
    ],
  ],
};
