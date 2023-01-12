/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  plugins: ['prettier', 'unused-imports'],
  rules: {
    'prettier/prettier': 'error',
    'unused-imports/no-unused-imports': 'error',
  },
  env: {
    browser: true,
    es6: true,
  },
}
