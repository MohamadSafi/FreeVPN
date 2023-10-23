/** @type {import('next').NextConfig} */
// const { i18n } = require("./i18n");
// const { nextI18NextRewrites } = require("next-i18next/rewrites");
const localeSubpaths = {
  ar: "ar",
};

const nextConfig = {
  // rewrites: async () => nextI18NextRewrites(localeSubpaths),
};

module.exports = nextConfig;
