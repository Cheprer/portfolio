// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ["public/**/*.js", "tailwind.config.mjs"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
);