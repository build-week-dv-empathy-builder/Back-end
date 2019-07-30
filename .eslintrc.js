module.exports = {
    // "env": {
    //     "browser": true,
    //     "commonjs": true,
    //     "es6": true
    // },
    // "extends": "eslint:recommended",
    // "globals": {
    //     "Atomics": "readonly",
    //     "SharedArrayBuffer": "readonly"
    // },
    // "parserOptions": {
    //     "ecmaVersion": 2018
    // },
    // "rules": {
    // }
    "extends": ["airbnb", "prettier", "prettier/react"],
  "plugins": ["react", "prettier"],
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [".js", "jsx"]
      }
    ],
    "prettier/prettier": "error",
    "max-len": ["error", 80]
  },
  "env": {
    "browser": true
  },
  "settings": {
    "import/resolver": {
      "webpack": {
        "config": "./config/webpack-common-config.js"
      }
    }
  }
};