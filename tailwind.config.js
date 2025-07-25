// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./projects/**/*.html", // All individual project pages
    "./src/**/*.{js,ts}", // All JavaScript files under src
    "./**/*.html", // Catch-all for any other HTML files
  ],
  safelist: [
    {
      pattern: /./, // Keep all classes that appear dynamically
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
