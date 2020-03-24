import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const Content = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    padding: 100px 0;

    @media (max-width: 500px) {
        padding: 10px 0;
        flex-direction: column;
    }
`

const H1 = styled.h1`
    @media (max-width: 500px) {
        margin: 40px 0 40px 0;
    }
`

const About = styled.p`
    width: 70%;

    @media (max-width: 500px) {
        width: 100%;
        flex-direction: column;
    }
`

export default props => {

    return (
        <Layout>
            <SEO title="About"/>
            <Content>
                <H1>About</H1>
                <About>
                    I'm a Brussels based programmer with a passion for generative art. 
                    I came in contact with Processing through my studies and quickly became interested in the concept of
                    generating something visually attractive and unique each time a program is run.
                    
                    <br/><br/>
                    More recently,
                    I discovered the vibrant community of pen plotters. It's a lot of fun
                    to be able to draw your artwork using fountain pens, markers or even paint brushes using scalable
                    vector graphics instead of having to rely on high resolution images and professional print shops.
                    Because I often struggle with having too much options it's also very welcoming to being limited to generating
                    lines only.

                    <br/><br/>
                    Currently I make most of my sketches using javascript as it is easier for me to develop, debug and share
                    sketches on the internet.
                    Starting out using P5js, I eventually switched to Paperjs for generating SVG files since I never 
                    quite got around getting the SVG export function in P5js to work with webpack.
                    I only ever switch back to Processing when more performance is needed.

                    <br/><br/>
                    This site is mainly used for posting more information on the process of making
                    my sketches. Most of them are available to test out in the browser although it must
                    be said they are pretty messy and I made few attempts to make them 
                    performant or easy to use so beware, they might freeze your browser. For fellow programmers
                    the (also sloppy at times) source code for sketches and this website is also made 
                    publicly available on my Github.
                </About>
            </Content>
        </Layout>
    );
}