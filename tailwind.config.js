/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/Blog.js",
    "./src/components/NewHeader.js",
    "./src/components/AddPost.js",
    "./src/components/Button.js",
    "./src/components/Post.js",
    "./src/components/Footer.js",
  ],
  theme: {
    extend: {
      spacing: {
        512: "32rem",
      },
    },
  },
  plugins: [],
};
