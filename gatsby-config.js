module.exports = {
  siteMetadata: {
    title: `Yayy Chin Dr Yayy`,
    description: `Nyi Htut Zaw's short blog,things i wan to write, nyihtutzaw gatsby's site`,
    author: `@nyihtutzaw`,
    siteUrl: `localhost:8000`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
