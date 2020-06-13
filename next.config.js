require("dotenv").config();
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  env: {
    API_URL: process.env.API_URL,
    API_URL_PROD: process.env.API_URL_PROD,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
  },
});
