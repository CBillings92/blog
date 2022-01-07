module.exports = {
  siteMetadata: {
    title: `Cameron's Blog`,
    description: 'Personal Site and Blog',
    siteUrl: 'https://www.cameronbillings.com',
    image:
      'https://media-exp1.licdn.com/dms/image/C4E03AQHLBsWnXhck-A/profile-displayphoto-shrink_400_400/0/1557843079619?e=1644451200&v=beta&t=5W-EdfBWfDzECMKkBFG6dBBFJXUS9sMZzOSK3Qy_RhU',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-remark-images',
    'gatsby-plugin-google-gtag',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          'G-0NRK4Y285T', // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: 'OPT_CONTAINER_ID',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: [],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      opitons: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: '1200px',
            },
          },
        ],
        defaultLayouts: {
          default: require.resolve('./src/templates/post.js'),
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
