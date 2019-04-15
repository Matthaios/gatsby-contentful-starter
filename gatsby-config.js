require("dotenv").config({
  path: `.env`
});
module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `${process.env.spaceId}`,
        accessToken: `${process.env.accessToken}`,
        downloadLocal: true
      }
    },
    {
      resolve: "gatsby-plugin-compile-es6-packages",
      options: {
        modules: ["gatsby-theme-contentful"]
      }
    }
  ]
};
