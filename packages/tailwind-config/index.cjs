// Shared Tailwind v4 base configuration for the monorepo
module.exports = {
  // content is intentionally left empty here; each consumer app should provide
  // its own `content` array (paths) so Tailwind can tree-shake correctly.
  theme: {
    extend: {
      colors: {
        primary: '#0ea5a4',
        accent: '#7c3aed'
      }
    }
  },
  plugins: [],
  // Keep an empty content placeholder so tooling reading this file won't fail
  content: []
};

