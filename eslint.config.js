import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  { ignores: ['dist', 'scripts'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node, // Add node globals for scripts
      },
      parserOptions: {
        ecmaVersion: 'latest',
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
      // Allow motion to be used as JSX namespace (motion.div, motion.button, etc.)
      'no-unused-vars': ['error', { 
        varsIgnorePattern: '^[A-Z_]|^motion$',
        argsIgnorePattern: '^_'
      }],
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Allow setState in effects for initialization patterns
      'react-hooks/set-state-in-effect': 'off',
    },
  },
]
