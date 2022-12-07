import { graphql } from 'gatsby'
import React from 'react'

export default function detail({ data }) {
    console.log(data)

    const { markdownRemark } = data;
    const { html, frontmatter } = markdownRemark;
  return (
    <div>
        <h1>
            {frontmatter.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: html }}  className="content"/>
    </div>
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