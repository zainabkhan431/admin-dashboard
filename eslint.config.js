import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default {
  ignores: ['dist'],
  overrides: [
    {
      files: ['**/*.{js,jsx}'],
      languageOptions: {
        ecmaVersion: 'latest',
        globals: globals.browser,
        parserOptions: {
          ecmaFeatures: { jsx: true },
          sourceType: 'module',
        },
      },
      plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
      },
      rules: {
        ...js.configs.recommended.rules,
        ...reactHooks.configs.recommended.rules,
        'react/prop-types': 'off',
        'react/no-unused-vars': 'off',
        'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
      },
    },
  ],
};
