module.exports = {
  siteMetadata: {
    title: 'Spoon Theme',
    description: 'A minimal, dark theme for VS Code.',
    keywords: 'Spoon theme, Spoon, theme, dark theme, VS Code theme',
    twitterHandle: '@ayanbagds',
    siteURL: 'https://spoontheme.netlify.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#171c28',
        theme_color: '#1d2433',
        display: 'minimal-ui',
        icon: 'src/images/logo.png', // This path is relative to the root of the site.
      },
    },
  ],
};
