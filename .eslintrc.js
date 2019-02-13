module.exports = {
    "extends": "airbnb-base",
    "env": {
      "browser": true,
      "es6": true
    },
    "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
    "rules": {
      "no-console": "off",
      "no-underscore-dangle": [2, {"allowAfterThis": true}],
      "template-curly-spacing": [0, "always"],
      "import/extensions": 0,
      "linebreak-style": ["error", "unix"]
    }
  };