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
        spaceId: `tibqws1kix91`,
        accessToken: `0e01d96c5fc024045734bd00cee85f4c1ec7757924f30d1a88247c125a54dc72`,
        downloadLocal: true
      }
    }
  ]
};
