/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Alias all `react-native` imports to `react-native-web`
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-native$": "react-native-web",
    };
    config.resolve.extensions = [
      ".web.js",
      ".web.jsx",
      ".web.ts",
      ".web.tsx",
      ".tsx",
      ...config.resolve.extensions,
    ];
    return config;
  },
};

module.exports = nextConfig;
