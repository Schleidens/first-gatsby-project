import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../../layout/Layout';

export default function detail({ data }) {
    console.log(data)

    const { markdownRemark } = data;
    const { html, frontmatter } = markdownRemark;
  return (
    <Layout>
        <div>
            <h1>
                {frontmatter.title}
            </h1>
            <div dangerouslySetInnerHTML={{ __html: html }}  className="content"/>
        </div>
    </Layout>
  )
}

export const query = graphql`
    query($id: String!) {
        markdownRemark(id: { eq: $id }) {
          html
          frontmatter {
            slug
            title
          }
        }
    }
`