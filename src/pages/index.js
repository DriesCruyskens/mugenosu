import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ShowcaseSection from "../components/ShowcaseSection"

const IndexPage = props => {
  return (
    <Layout hideLogo="true">
      <SEO title="Home" />
  
      <ShowcaseSection 
        content="Generative sketches using code and pen plotters. Every sketch is solely made out of lines or dots and outputs a unique graphic that can never be generated again."
        img="main.svg"
        isMain={true}
      />
      {props.data.allMarkdownRemark.edges.map(({ node }) => {
        return (
        <ShowcaseSection 
          title={node.frontmatter.title}
          content={node.frontmatter.description}
          img={node.frontmatter.image.base}
        />)
      })}
  
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
        
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
        }
      }
    }
  }
`

export default IndexPage
