/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'start with Gatsby',
    siteUrl: 'https://www.yourdomain.tld',
    description: 'yeahhh Gatsby is good'
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
 {
    resolve: 'gatsby-source-filesystem', 
    options: {
      "name": "pages",
      "path": "./src/blogs/"
      },
    __key: "pages"
  }]
};