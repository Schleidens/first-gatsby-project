/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `first-gatsby-project`,
    siteUrl: `https://www.yourdomain.tld`
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
  }],
  siteMetadata: {
    title: 'start with Gatsby',
    description: 'yeahhh Gatsby is good'
  }
};