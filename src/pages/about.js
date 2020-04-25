import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'

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
                    {/* ReactMarkdown is necessary for parsing markdown. I can't use 
                        gatsby-transformer-remark because it is from a field in a .yml file.
                    */}
                    <ReactMarkdown source={props.data.about.childPagesYaml.about} />
                </About>
            </Content>
        </Layout>
    );
}

export const query = graphql`
  query {
    about: file(relativePath: {eq: "about.yml"}) {
        relativePath
        childPagesYaml {
          about
        }
      }
  }
`