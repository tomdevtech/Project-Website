import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from '@typescript-eslint/eslint-plugin'
import parser from '@typescript-eslint/parser'

const fixedGlobals = Object.fromEntries(
  Object.entries(globals.browser).map(([key, value]) => [key.trim(), value])
);

export default [
  {
    ignores: ['dist', 'node_modules', 'public']
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser,
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...fixedGlobals,
        ...globals.node,
        ...globals.es2021,
      },
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      '@typescript-eslint': tseslint,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
]
