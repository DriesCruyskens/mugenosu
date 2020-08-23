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
    width: 80%;
    margin: 50px 0;
  }
`

const HeroTitle = styled.h1`
  
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

const StyledA = styled.a`
  text-decoration: none;
  color: black;
  opacity: .8;
  margin-bottom: 1.45rem;

  :hover {
      text-decoration: underline;
  }
`

export default props => {
const post = props.data.markdownRemark

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

          {post.frontmatter.url && 
            <StyledA 
              href={post.frontmatter.url} 
              target="_blank" 
              rel="noopener noreferrer">Try it out
              </StyledA>
          }

          { post.frontmatter.github &&
            <IconLink href={post.frontmatter.github} target="_blank">
              <Icon src={githubLogo} alt="github logo" rel="noopener noreferrer"/>
            </IconLink>
          }
        </HeroSection>

        {/* DangerouslySetInnerHTML is used because the post is sourced from Github
            and thus exploitation is not straightforward.
        */}
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
        url
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  }
`