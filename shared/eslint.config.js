import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      ecmaVersion: 2020,
    },
    rules: {
      eqeqeq: ['error', 'always'],
      quotes: ['error', 'single']
    }
  },
  tseslint.configs.recommended,
]);
