import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

const ShopPage = props => {
  return (
    <Layout>
      <SEO title="Shop" />

      {props.data.allMarkdownRemark.edges.map(({ node }) => {
        return (
          <button className="snipcart-add-item"
          data-item-id={node.frontmatter.title}
          data-item-price={node.frontmatter.price}
          data-item-url="https://deploy-preview-32--condescending-neumann-452934.netlify.app/shop/"
          data-item-description={node.frontmatter.description}
          data-item-image={node.frontmatter.featured_image.childImageSharp.fluid.src}
          data-item-name={node.frontmatter.title}>
          Add to cart
          </button>)
      })}

    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: {fields: {sourceName: {eq: "products"}}}, sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          html
          frontmatter {
            title
            description
            price
            featured_image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

export default ShopPage
