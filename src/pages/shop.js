import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import Product from "../components/product"
import styled from 'styled-components'

const ProductWrapper = styled.div`
  padding: 100px 0 100px 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 1rem;
  row-gap: 100px;
  column-gap: 50px;

  @media (max-width: 500px) {
    padding: 50px 0 50px 0;
  }
`

const ShopPage = props => {
  return (
    <Layout>
      <SEO title="Shop" />
      <ProductWrapper>
        {props.data.allMarkdownRemark.edges.map(({ node }, index) => {
          return (
            <Product
              frontmatter={node.frontmatter}
              slug={node.fields.slug} key={index}>
              Add to cart
            </Product>)
        })}
      </ProductWrapper>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: {fields: {sourceName: {eq: "products"}}}, sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          fields {
            slug
          }
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
    }
  }
`

export default ShopPage
