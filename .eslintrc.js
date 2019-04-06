module.exports = {
  "extends": "standard",
  "plugins": [
      "standard",
      "promise",
      "chai-friendly",
      "chai-expect"
  ],
  "rules": {
    "indent": ["error", 4],
    "semi": [2, "always"],
    "no-extra-semi": 2,
    "no-unused-expressions": 0,
    "chai-friendly/no-unused-expressions": 2,
    "chai-expect/missing-assertion": 2,
  },
  globals: {
    browser: true,
    expect: true,
    $: true,
    $$: true,
    field: true
  },
  "env": {
    "mocha": true
  },

};
