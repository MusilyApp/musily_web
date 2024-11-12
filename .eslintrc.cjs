module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    '@nuxtjs/eslint-config-typescript',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    semi: 'off',
    quotes: 'off',
    'comma-dangle': 'off',
    'prettier/prettier': [
      'error',
      { trailingComma: 'all' },
      {
        endOfLine: 'auto',
      },
    ],
    'space-before-function-paren': 'off',
    'arrow-parens': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'no-useless-constructor': 'off',
    indent: 'off',
    'brace-style': 'off',
    'require-await': 'off',
    'vue/html-indent': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
      },
    ],
  },
};
