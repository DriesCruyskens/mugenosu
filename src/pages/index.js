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
    font-family: 'ABeeZee';

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

const Date = styled.p`
    font-size: .7rem;
    opacity: .7;
    margin-bottom: 1.5rem;
`

const ShowcaseSection = props => {
  if (props.isMain) {
    Title.withComponent('h1')
  }
  console.log(props)
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
              {props.date && <Date>{props.date}</Date>}
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
        content="Generative drawings using code and pen plotters. 
          Every sketch is solely made out of lines or dots and outputs 
          a unique graphic that can never be generated the same way again.
          This site is mainly used for posting more information on how certain
          sketches work. Most of them are available to test out in the browser although
          I made no attempts to make them performant or easy to use. For fellow programmers
          the source code for sketches and this website is also made 
          publicly available on Github."
        img="main.png"
        isMain={true}
      />
      {props.data.allMarkdownRemark.edges.map(({ node }) => {
        return (
        <ShowcaseSection 
          key={node.id}
          title={node.frontmatter.title}
          date={node.frontmatter.date}
          content={node.frontmatter.description}
          img={node.frontmatter.image.base}
          fluid={node.frontmatter.image.childImageSharp.fluid}
          slug={node.html != "" ? node.fields.slug : null} // only render button if there is markdown text
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
          html
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
