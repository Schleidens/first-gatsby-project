import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../../layout/Layout';

export default function index({ data }) {

  const posts = data.allMarkdownRemark.nodes;
    return (
         <Layout>
          <div>
              <h1>
                all the blog post
              </h1>

              <div>
                <ul>
                  {posts.map(post => (
                    <Link to={post.frontmatter.slug} key={post.id}>
                      <li>
                      {post.frontmatter.title}
                    </li>
                    </Link>
                  ))}
                </ul>
              </div>
        </div>
         </Layout>
  )
}

export const query = graphql`
query blogost {
  allMarkdownRemark {
    nodes {
      frontmatter {
        description
        slug
        title
      }
      id
    }
  }
}
`
