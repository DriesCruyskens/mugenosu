/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import styled, { css } from "styled-components"

import Nav from "./nav"
import "./layout.css"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1rem;
    color: black;
    opacity: .8;
  }

  h1, h2 {
    font-family: system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  .headroom {
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
  .headroom--unfixed {
    position: relative;
    transform: translateY(0);
  }
  .headroom--scrolled {
    transition: transform 200ms ease-in-out;
    box-shadow: 1px 1px 5px rgb(182, 182, 182);
  }
  .headroom--unpinned {
    position: fixed;
    transform: translateY(-100%);
  }
  .headroom--pinned {
    position: fixed;
    transform: translateY(0%);
  }
`

const StyledDiv = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  padding: 0 10%;

  @media (max-width: 500px) {
    padding: 0 3%;
}
`

const StyledFooter = styled.footer`
  margin: 50px;
  font-size: .7rem;
  text-align: center;

  @media (max-width: 500px) {
    padding: 0 3%;
}
`

const Layout = props => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Nav hideLogo={props.hideLogo} />
      <StyledDiv>
        <main>{props.children}</main>
        <StyledFooter>
          © {new Date().getFullYear()} {data.site.siteMetadata.title}
        </StyledFooter>
      </StyledDiv>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
