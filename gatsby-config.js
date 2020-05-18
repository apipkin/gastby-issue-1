const contentPath = `${__dirname}/content`;

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: contentPath,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          content: require.resolve('./src/components/ContentLayout.js'),
          default: require.resolve('./src/components/PageLayout.js'),
        }
      },
    },
    {
      resolve: 'gatsby-plugin-page-creator',
      options: {
        path: contentPath
      }
    },
  ],
};
 