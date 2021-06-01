module.exports = function (api) {
  api.cache(true);

  const presets = [["@babel/preset-env", {
      // NOTE: "usage" だと上手く動かなかった、詳細は未確認
      // useBuiltIns: "entry",
      // corejs: 3,
      targets: {
        chrome: "68",
        firefox: "62",
      },
    }]];

  return {
    presets,
    sourceType: "unambiguous",
  };
}
