import React from 'react'
import styled from 'styled-components'

const StyledSection = styled.section`
    min-height: 100vh;
    display: flex;
    justify-content: center;
`

const ImgWrapper = styled.div`
    width: 40%;
`

const Img = styled.img`

`

export default props => (
    <StyledSection>
        <ImgWrapper>
            <Img src="https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3900&q=80"></Img>
        </ImgWrapper>
    </StyledSection>
)