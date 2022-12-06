import { graphql } from "gatsby"
import * as React from "react"
import Layout from "../layout/Layout"

const IndexPage = ({ data }) => {
  const { title, description} = data.site.siteMetadata
  return (
    <Layout>
    <h2>
    gatsby
    </h2>

     {title} & {description}
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

export const query = graphql`
query SiteInfo {
  site {
    host
    port
    siteMetadata {
      title
      description
    }
  }
}
`
