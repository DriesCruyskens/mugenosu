import React from "react"
import ShowcaseSection from "./showcaseSection"
import styled from 'styled-components'

const HeroWrapper = styled.div`
    height: 90vh;
    overflow: hidden;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    position: relative:
`

const PulsatingSvg = styled.svg`
    animation: pulse 2s infinite;
    margin: auto;
    display: block;

    @media (max-width: 500px) {
    }

    @keyframes pulse {
        0% {
            opacity: 1;
        }
    
        50% {
            opacity: 0.2;
        }
    
        100% {
            opacity: 1;
        }
    }
`

const StyledShowcaseSection = styled(props => <ShowcaseSection {...props} />)`
    height: 80vh;
    min-height: initial;
    margin-bottom: 0;

    @media (max-width: 500px) {
    }
`

const intro = props => {

    return (
        <HeroWrapper>
            <StyledShowcaseSection
                title={props.title}
                content={props.content}
                fluid={props.fluid}
                alt="main image"
            />
            <PulsatingSvg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z"/>
            </PulsatingSvg>
        </HeroWrapper>
    );
}

export default intro;