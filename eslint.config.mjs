import globals from 'globals'

export default [
  {
    ignores: [
      '**/.cache/**',
      '**/node_modules/**',
      '**/build/**',
      '**/public/build/**',
      '**/playwright-report/**',
      '**/server-build/**',
      '**/dist/**',
    ],
  },

  // all files
  {
    plugins: {
      import: (await import('eslint-plugin-import-x')).default,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-unexpected-multiline': 'error',
      'no-warning-comments': [
        'error',
        { terms: ['FIXME'], location: 'anywhere' },
      ],
      'import/no-duplicates': ['warn', { 'prefer-inline': true }],
      'import/order': [
        'warn',
        {
          alphabetize: { order: 'asc', caseInsensitive: true },
          pathGroups: [{ pattern: '~*/**', group: 'internal' }],
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
        },
      ],
    },
  },

  // JSX/TSX
  {
    files: ['**/*.tsx', '**/*.jsx'],
    plugins: {
      react: (await import('eslint-plugin-react')).default,
      'react-hooks': await import('eslint-plugin-react-hooks'),
    },
    languageOptions: {
      parser: (await import('typescript-eslint')).parser,
      parserOptions: {
        jsx: true,
      },
    },
    rules: {
      'react/jsx-key': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },

  // JS and JSX files
  {
    files: ['**/*.js?(x)'],
    rules: {
      // most of these rules are useful for JS but not TS because TS handles these better
      // if it weren't for https://github.com/import-js/eslint-plugin-import/issues/2132
      // we could enable this :(
      // 'import/no-unresolved': ERROR,
      'no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^ignored',
        },
      ],
    },
  },

  // TS and TSX files
  {
    files: ['**/*.ts?(x)'],
    languageOptions: {
      parser: (await import('typescript-eslint')).parser,
      parserOptions: {
        projectService: true,
      },
    },
    plugins: {
      '@typescript-eslint': (await import('typescript-eslint')).plugin,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          args: 'after-used',
          argsIgnorePattern: '^_',
          ignoreRestSiblings: true,
          varsIgnorePattern: '^ignored',
        },
      ],
      'import/consistent-type-specifier-style': ['warn', 'prefer-inline'],
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        {
          prefer: 'type-imports',
          disallowTypeAnnotations: true,
          fixStyle: 'inline-type-imports',
        },
      ],
    },
  },
]
