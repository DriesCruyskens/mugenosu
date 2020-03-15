import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import Img from 'gatsby-image';
import styled from 'styled-components'
import { Link } from 'gatsby'
import MainImage from '../components/mainImage'

const StyledSection = styled.section`
    min-height: 90vh;
    display: flex;
    justify-content: space-between;
    align-items:center;

    :nth-child(even) {
        flex-direction: row-reverse;
    }
    
    @media (max-width: 500px) {
        flex-direction: column;
        justify-content: center;

        :nth-child(even) {
            flex-direction: column;
        }
    }
`

const ImgWrapper = styled.div`
    width: 50%;
    text-align: center;

    @media (max-width: 500px) {
        width: 100%;
        margin-bottom: 30px;
    }
`

const ContentWrapper = styled.div`
    width: 40%;
    display:flex;
    flex-direction: column;

    @media (max-width: 500px) {
        width: 100%;
        align-items: center;
    }
`

const StyledImg = styled(props => <Img {...props} />)`
    max-height: 400px;
`

const Title = styled.h2`
    font-family: 'Open Sans';

    @media (max-width: 500px) {
        text-align: center;
    }
`

const Content = styled.p`

`

const TextLink = styled(props => <Link {...props} />)`
    text-decoration: none;
    color: black;
    opacity: .8;

    :hover {
        text-decoration: underline;
    }
`

const ShowcaseSection = props => {
  if (props.isMain) {
    Title.withComponent('h1')
  }

  return (
      <StyledSection>
          <ImgWrapper>
              { !props.isMain && props.fluid && 
                <StyledImg 
                  style={{}}
                  imgStyle={{objectFit: "contain"}} 
                  fluid={props.fluid} 
                  alt={props.title + " image"}/> }
              { props.isMain && <MainImage/> }
          </ImgWrapper>
          <ContentWrapper>
              {props.title && <Title>{props.title}</Title>}
              {props.content && <Content> {props.content} </Content>}
              {props.slug && <TextLink to={props.slug}>Read more</TextLink>}
          </ContentWrapper>
      </StyledSection>
  )
}

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
          fluid={node.frontmatter.image.childImageSharp.fluid}
          slug={node.fields.slug}
        />)
      })}
    </Layout>
  )
}

// https://codebushi.com/gatsby-featured-images/
export const query = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          frontmatter {
            title
            description
            image {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
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
  }
`

export default IndexPage
