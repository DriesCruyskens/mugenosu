import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import ShowcaseSection from "../components/showcaseSection"
import Intro from "../components/intro"

const IndexPage = props => {
  return (
    <Layout hideLogo="true">
      <SEO title="Home" />

      {/* The main intro banner */}
      <Intro
        title={props.data.intro.childPagesYaml.title}
        content={props.data.intro.childPagesYaml.intro}
        fluid={props.data.intro.childPagesYaml.image.childImageSharp.fluid}
      />
      
      {/* Iterating over all sketches and displaying them using multiple ShowcaseSectoins. */}
      {props.data.allMarkdownRemark.edges.map(({ node }) => {
        return (
        <ShowcaseSection 
          key={node.id}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          content={node.frontmatter.description}
          url={node.frontmatter.url}
          fluid={node.frontmatter.image.childImageSharp.fluid}
          slug={node.html !== "" ? node.fields.slug : null} // only render button if there is markdown text
        />)
      })}
      
      {/* Script provided by Netlify-cms that handles a redirect to Mugenosu's homepage
          after a login attempt using Netlify Identity. It redirects to the /admin page.
          This should ideally before the </body> tag but only being on the index page is 
          enough for now.
      */}
      <script async dangerouslySetInnerHTML={{__html: `
        if (window.netlifyIdentity) {
          window.netlifyIdentity.on("init", user => {
            if (!user) {
              window.netlifyIdentity.on("login", () => {
                document.location.href = "/admin/";
              });
            }
          });
        }
      ` }}>
        
      </script>
    </Layout>
  )
}

// https://codebushi.com/gatsby-featured-images/
export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          html
          frontmatter {
            title
            description
            url
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
            date(formatString: "YYYY-MM-DD")
          }
          fields {
            slug
          }
        }
      }
    }
    intro: file(relativePath: {eq: "home.yml"}) {
      relativePath
      childPagesYaml {
        intro
        title
        image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default IndexPage
