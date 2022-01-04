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
