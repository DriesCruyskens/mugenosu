import React from "react"
import ShowcaseSection from "./showcaseSection"

const intro = props => {

    return (
        <ShowcaseSection 
            title={props.title}
            content={props.content}
            fluid={props.fluid}
            alt="main image"
        />
    );
}

export default intro;