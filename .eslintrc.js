module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['@aak.lear/base', '@aak.lear/typescript', 'prettier'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.eslint.json',
      },
    },
  ],
};
