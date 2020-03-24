import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'

const Content = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    padding: 200px 0;

    @media (max-width: 500px) {
        padding: 100px 0;
        flex-direction: column;
    }
`

const H1 = styled.h1`

`

const About = styled.p`
    width: 50%;

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
                    I'm a Brussels based web developer and technology enthousiast with a passion for generative art.
                    <br/><br/>
                    This site is mainly used for posting more information on the process of making
                    my sketches. Most of them are available to test out in the browser although it must
                    be said they are pretty messy and I made few attempts to make them 
                    performant or easy to use so beware, they might freeze your browser. For fellow programmers
                    the (also sloppy at times) source code for sketches and this website is also made 
                    publicly available on Github.
                </About>
            </Content>
        </Layout>
    );
}