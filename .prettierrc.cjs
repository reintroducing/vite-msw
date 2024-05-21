module.exports = {
  arrowParens: 'avoid',
  bracketSpacing: false,
  singleQuote: true,
  overrides: [
    {
      files: '*.scss',
      options: {
        singleQuote: false,
      },
    },
  ],
};
