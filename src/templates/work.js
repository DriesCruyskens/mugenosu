import React from "react"
import Layout from "../components/layout"
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import githubLogo from '../images/github-logo.svg'

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items:center;
  margin-bottom: 50px;
`

const HeroImg = styled(props => <Img {...props}/>)`
  width: 50%;
  margin: 50px;

  @media (max-width: 500px) {
    width: 100%;
    margin: 50px 0;
  }
`

const HeroTitle = styled.h1`
  font-family: "ABeeZee"
`

const IconLink = styled.a`
    display: flex;
    align-items: center;
`

const Icon = styled.img`
    width: 2rem;
    opacity: .3;
    padding: 0;
    margin: 0;

    ${IconLink}:hover & {
        opacity: 1;
      }
`

const Content = styled.section`
      max-width: 600px;
      margin: auto;
`

export default props => {
const post = props.data.markdownRemark
console.log(post)
  return (
    <Layout>
        <SEO title={post.frontmatter.title}/>
        <HeroSection>
          <HeroImg 
            fluid={post.frontmatter.image.childImageSharp.fluid}
            loading="eager"
            />
          <HeroTitle>
            {post.frontmatter.title}
          </HeroTitle>
          <IconLink href={post.frontmatter.github} target="_blank">
              <Icon src={githubLogo} alt="github logo" rel="noopener noreferrer"/>
          </IconLink>
        </HeroSection>
        <Content dangerouslySetInnerHTML={{ __html: post.html }}>
        </Content>
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
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`