import React from 'react'
import styled from 'styled-components'
import { useStaticQuery } from 'gatsby'

const StyledSection = styled.section`
    min-height: 90vh;
    display: flex;
    justify-content: space-between;
    align-items:center;
    
    @media (max-width: 400px) {
        flex-direction: column;
        justify-content: center;
    }
`

const ImgWrapper = styled.div`
    width: 60%;

    @media (max-width: 400px) {
        width: 100%;
    }
`

const ContentWrapper = styled.div`
    width: 40%;

    @media (max-width: 400px) {
        width: 100%;
    }
`

const Img = styled.img`

`

const Title = styled.h2`
    font-family: 'Permanent Marker';
`

const Content = styled.p`

`

export default props => {
    if (props.isMain) {
        Title.withComponent('h1')
    }

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