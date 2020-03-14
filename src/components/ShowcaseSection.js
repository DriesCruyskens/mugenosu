import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
    min-height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items:center;
`

const ImgWrapper = styled.div`
    width: 60%;
`

const ContentWrapper = styled.div`
    max-width: 40%;
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

    return (
        <StyledSection>
            <ImgWrapper>
                <Img src={props.img}></Img>
            </ImgWrapper>
            <ContentWrapper>
                {props.title && <Title>{props.title}</Title>}
                {props.content && <Content> {props.content} </Content>}
            </ContentWrapper>
        </StyledSection>
    )
}