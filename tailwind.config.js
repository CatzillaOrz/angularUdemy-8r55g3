// tailwind.config.js
module.exports = {
  // Tailwind Paths
  configJS: './tailwind.config.js',
  sourceCSS: './src/tailwind.css',
  outputCSS: './src/styles.css',
  content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  // Sass
  sass: false,
  // PurgeCSS Settings
  // ...
  theme: {
    colors: {
      indigo: '#5c6ac4',
      blue: '#007ace',
      red: '#de3618',
    },
  },
};
