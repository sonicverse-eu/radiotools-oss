// Per-app Tailwind config that re-uses the shared config package and sets content paths
const shared = require('@radiotools/tailwind-config');

module.exports = {
  ...shared,
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '../../packages/ui/src/**/*.{js,ts,jsx,tsx}'
  ]
};

