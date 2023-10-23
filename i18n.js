const NextI18Next = require("next-i18next").default;

module.exports = new NextI18Next({
  otherLanguages: ["ar"],
  defaultNS: "common",
  localeSubpaths: {
    ar: "ar",
  },
  localePath: "public/locales",
});
