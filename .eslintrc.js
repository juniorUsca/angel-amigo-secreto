module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'class-methods-use-this': ['error', { exceptMethods: ['connect'] }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-plusplus': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'max-len': ['error', { code: 120 }],
    'react/jsx-props-no-spreading': ['error', {
      html: 'enforce',
      custom: 'enforce',
      explicitSpread: 'ignore',
      exceptions: ['input', 'Input'],
    }],
    'jsx-a11y/label-has-associated-control': ['error', {
      labelComponents: [],
      labelAttributes: [],
      controlComponents: [],
      assert: 'either',
      depth: 25,
    }],
  },
}
