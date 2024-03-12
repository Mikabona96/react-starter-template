module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-refresh'],
  rules: {
    'no-var': 'error',
    'prefer-const': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-target-blank': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'prettier/prettier': [
      'off',
      {
        endOfLine: 'auto',
      },
    ],
    'react/no-unescaped-entities': 'off',
  },
};
