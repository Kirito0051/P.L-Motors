export default defineNuxtConfig({
  devtools: { enabled: false },

  // Add global CSS files
  css: ["~/assets/css/main.css"],

  // PostCSS configuration for Tailwind and Autoprefixer
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  // Head configurations (for scripts and fonts)
  app: {
    head: {
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/js/all.min.js",
          crossorigin: "anonymous",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Pre:wght@400..700&family=Playwrite+NG+Modern:wght@100..400&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap",
        },
      ],
    },
  },

  // Define the compatibility date for the Nuxt app
  compatibilityDate: "2024-11-21",
});
