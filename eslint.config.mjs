import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended', // Accessibility rules for JSX
    'plugin:prettier/recommended', // Integrates Prettier with ESLint
  ),
  {
    files: ['**/*.ts', '**/*.tsx'],
    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      'prettier/prettier': ['error'], // Treat Prettier issues as errors
      'react/react-in-jsx-scope': 'off', // Not needed in Next.js
      'react/prop-types': 'off', // Not relevant with TypeScript
      'react-hooks/exhaustive-deps': 'warn', // Warn about missing useEffect dependencies
    },
  },
];

export default eslintConfig;
