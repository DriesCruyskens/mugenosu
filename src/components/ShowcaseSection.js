import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'
import MainImage from './mainImage'

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

const Img = styled.img`
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

export default props => {
    if (props.isMain) {
        Title.withComponent('h1')
    }

    // getting all svg to find a match with the one in the markdown file
    const data = useStaticQuery(graphql`
        {
        allFile(filter: { extension: { glob: "png" } }) {
            edges {
            node {
                publicURL
                base
            }
            }
        }
        }
    `)

    const publicURL = data.allFile.edges.filter(x => {
        return props.img === x.node.base
    })[0].node.publicURL

    return (
        <StyledSection>
            <ImgWrapper>
                { !props.isMain && <Img src={publicURL}></Img> }
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