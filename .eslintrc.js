module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
      "no-alert": 0,
      "semi": [2,"never"],
      "max-len":[1,200,2],
      "linebreak-style": [ 0, "windows" ],
      "react/prefer-stateless-function":[ 0, { "ignorePureComponents": true} ],
      "react/jsx-filename-extension": [0],
      "react/jsx-wrap-multilines": [0],
      "function-paren-newline": [0],
      "jsx-a11y/anchor-is-valid": [0],
      "object-curly-newline": [0],
      "react/forbid-prop-types": 0,
      "react/prop-types": [0],
      "react/state-in-constructor": [0],
      "react/forbid-prop-types": [0],
      "react/jsx-indent": [0],
      "template-curly-spacing" : "off",
      "implicit-arrow-linebreak": [0],
      "jsx-a11y/interactive-supports-focus": [0],
      "no-confusing-arrow": [0],
      "indent" : "off",
      "operator-linebreak": [0],
      "sort-imports": [0],
  },
};
