module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'react',
    'import',
  ],
  rules: {
    // Base rules
    'no-unused-vars': 'warn',
    'no-console': 'warn',
    'eqeqeq': 'error',
    'curly': 'error',
    'no-undef': 'error',
    'no-redeclare': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-multi-spaces': 'error',
    'semi': ['error', 'always'],

    // TypeScript-specific rules
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/no-non-null-assertion': 'warn',
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],

    // React-specific rules
    'react/jsx-uses-react': 'warn',
    'react/jsx-uses-vars': 'warn',
    'react/react-in-jsx-scope': 'warn',
    'react/prop-types': 'warn',
    'react/no-array-index-key': 'warn',

    // Import rules
    'import/no-unresolved': 'error',
    'import/named': 'error',
    'import/default': 'error',
    'import/namespace': 'error',
    'import/no-duplicates': 'error',
    'import/order': ['warn', {
      'groups': [['builtin', 'external', 'internal']],
      'newlines-between': 'always',
    }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
