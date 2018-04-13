module.exports = {

  siteMetadata: {
    title: 'Gatsby-wp',

    subtitle: 'WordPress site using Gatsby.js',
  },

  plugins: [
    'gatsby-plugin-react-helmet',

    {
      resolve: 'gatsby-source-wordpress',

      options: {
        baseUrl: 'gatsbywp.local',

        protocol: 'http',

        useACF: false,

        verboseOutput: true,
      },
    },
  ],
}
