import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ShowcaseSection from "../components/ShowcaseSection"

import MainImage from '../images/main.svg'

const IndexPage = props => {
  console.log(props.data)
  return (
    <Layout hideLogo="true">
      <SEO title="Home" />
  
      <ShowcaseSection 
        content="Generative sketches using code and pen plotters. Every sketch is solely made out of lines or dots and outputs a unique graphic that can never be generated again."
        img={MainImage}
        isMain={true}
      />
  
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
    allFile {
      edges {
        node {
          name
        }
      }
    }
  }
`

export default IndexPage
