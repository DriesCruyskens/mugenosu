/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from 'styled-components'

import Nav from "./nav"
import "./layout.css"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "ABeeZee";
    font-size: 1rem;
    color: black;
    opacity: .8;
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
      <Nav hideLogo={props.hideLogo}/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1200,
          padding: `0 10%`,
        }}
      >
        <main>{props.children}</main>
        <footer style={{
          margin: "50px",
          fontSize: '.7rem',
          textAlign: 'center'
        }}>
          © {new Date().getFullYear()} {data.site.siteMetadata.title}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
