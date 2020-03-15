import React from "react"
import Layout from "../components/layout"
import SEO from '../components/seo'
import { graphql } from 'gatsby'

export default props => {
const post = props.data.markdownRemark
console.log(post)
  return (
    <Layout>
        <SEO title={post.frontmatter.title}/>
      <div>Hello blog post</div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        github
        image {
            base
        }
      }
    }
  }
`