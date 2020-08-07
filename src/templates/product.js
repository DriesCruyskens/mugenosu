import React from "react"
import Layout from "../components/layout"
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'

export default props => {
const post = props.data.markdownRemark

  return (
    <Layout>
        <SEO title={post.frontmatter.title}/>
        
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }, sourceName: {eq: "products"}}) {
      html
      frontmatter {
        title
        sold
        description
        price
        featured_image {
          childImageSharp {
            fluid(maxWidth: 600) {
              src
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`