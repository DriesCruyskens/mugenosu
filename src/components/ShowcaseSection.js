import React from 'react'
import styled from 'styled-components'
import { useStaticQuery } from 'gatsby'

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

    @media (max-width: 500px) {
        width: 100%;
    }
`

const Img = styled.img`
    max-height: 400px;
`

const Title = styled.h2`
    font-family: 'Permanent Marker';

    @media (max-width: 500px) {
        text-align: center;
    }
`

const Content = styled.p`

`

export default props => {
    if (props.isMain) {
        Title.withComponent('h1')
    }

    // getting all svg to find a match with the one in the markdown file
    const data = useStaticQuery(graphql`
        {
        allFile(filter: { extension: { glob: "svg|png|jpg" } }) {
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
        return props.img == x.node.base
    })[0].node.publicURL
    console.log(publicURL)

    return (
        <StyledSection>
            <ImgWrapper>
                <Img src={publicURL}></Img>
            </ImgWrapper>
            <ContentWrapper>
                {props.title && <Title>{props.title}</Title>}
                {props.content && <Content> {props.content} </Content>}
            </ContentWrapper>
        </StyledSection>
    )
}