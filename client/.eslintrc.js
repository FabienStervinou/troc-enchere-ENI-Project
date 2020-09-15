module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: ["plugin:vue/strongly-recommended", "eslint:recommended"],
  plugins: ["vue"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    // ESLINT RULES
    // "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 1,
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    quotes: ["error", "single"]
  }
};
