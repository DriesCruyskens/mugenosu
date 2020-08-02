import React from "react"
import Img from 'gatsby-image';
import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

const StyledSection = styled.section`
    min-height: 90vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    :nth-child(even) {
        flex-direction: row-reverse;
    }
    
    @media (max-width: 500px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin-bottom: 70px;
        margin-left: auto;
        margin-right: auto;
        width: 80%;

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
        margin-bottom: 50px;
    }
`

const ContentWrapper = styled.div`
    width: 40%;
    display:flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 500px) {
        width: 100%;
        align-items: center;
    }
`

const StyledImg = styled(props => <Img {...props} />)`
    max-height: 400px;
`

const Title = styled.h2`
    @media (max-width: 500px) {
        text-align: center;
        margin-bottom: 30px;
    }
`

const Content = styled.p`

`

{/* Differentiating between an internal gastby link (Link component)
    and the external 'try it out' Github link (normal <a> tag). As they
    use the same styles this linkStyle variable contains the common 
    css for both of them.
*/}
const linkStyles = css`
  text-decoration: none;
  color: black;
  opacity: .8;
  margin-bottom: 1rem;

  :hover {
      text-decoration: underline;
  }
`;

const TextLink = styled(props => <Link {...props} />)`
  ${linkStyles}
`

const StyledA = styled.a`
  ${linkStyles}
`

const Date = styled.p`
    font-size: .7rem;
    opacity: .7;
    margin-bottom: 1.5rem;
`

{/* ShowcaseSection is contains an image on one side and a title, text and optional links
    to Github and/or 'read more' page on the other side. They alternate by reversing the
    flex-direction on even sections.

    A check for isMain is used to load the main image for the hero banner.
*/}

const ShowcaseSection = props => {
  
    return (
        <StyledSection className={props.className}>
            <ImgWrapper> 
                { props.fluid && 
                  <StyledImg 
                    imgStyle={{objectFit: "contain"}} 
                    fluid={props.fluid} 
                    alt={props.alt ? props.alt : props.title + " image"}/> }
            </ImgWrapper>
            <ContentWrapper>
                {props.title && <Title>{props.title}</Title>}
                {/* {props.date && <Date>{props.date}</Date>} */}
                {props.content && <Content> {props.content} </Content>}
                {props.slug && <TextLink to={props.slug}>Read more</TextLink>}
                {props.url && <StyledA href={props.url} target="_blank" rel="noopener noreferrer">Try it out</StyledA>}
            </ContentWrapper>
        </StyledSection>
    )
  }

  export default ShowcaseSection