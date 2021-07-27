module.exports = {
    processors: [],
    plugins: [],
    extends: ["stylelint-prettier/recommended"],
    rules: {
      // 取消某些规则如下:
      "unit-case": null,
      "rule-empty-line-before": null,
      "comment-empty-line-before": null,
      "declaration-block-trailing-semicolon": null,
      "selector-type-no-unknown": null
    }
};
  