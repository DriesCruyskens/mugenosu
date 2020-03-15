import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ShowcaseSection from "../components/showcaseSection"
import { graphql } from 'gatsby'

const IndexPage = props => {
  return (
    <Layout hideLogo="true">
      <SEO title="Home" />
  
      <ShowcaseSection 
        content="Generative drawings using code and pen plotters. Every sketch is solely made out of lines or dots and outputs a unique graphic that can never be generated the same way again."
        img="main.png"
        isMain={true}
      />
      {props.data.allMarkdownRemark.edges.map(({ node }) => {
        return (
        <ShowcaseSection 
          key={node.id}
          title={node.frontmatter.title}
          content={node.frontmatter.description}
          img={node.frontmatter.image.base}
          slug={node.fields.slug}
        />)
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            description
            image {
              base
            }
            date(formatString: "YYYY-MM-DD")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
