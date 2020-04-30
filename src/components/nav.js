import React from "react"
import { Link } from "gatsby"
import Headroom from "react-headroom"
import styled from "styled-components"
import instagramLogo from "../images/instagram-logo.svg"
import githubLogo from "../images/github-logo.svg"
import { useStaticQuery, graphql } from "gatsby"

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 15px 50px 15px 50px;
  background-color: white;

  @media (max-width: 500px) {
    padding: 10px 20px;
  }
`

const LeftLinks = styled.div`
  display: flex;
  width: 33.33%;
`

const CenterLinks = styled.div`
  width: 33.33%;
  text-align: center;
`

const RightLinks = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  width: 33.33%;
  text-align: right;
`

const TextLink = styled(props => <Link {...props} />)`
  margin-left: 1rem;
  color: black;
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.7;

  :hover {
    opacity: 1;
  }
`

const IconLink = styled.a`
  margin-right: 1rem;
  display: flex;
  align-items: center;
`

const Icon = styled.img`
  width: 1rem;
  opacity: 0.5;
  padding: 0;
  margin: 0;

  ${IconLink}:hover & {
    opacity: 1;
  }
`

const Logo = styled(props => <Link {...props} />)`
  color: black;
  font-size: 1.5em;
  text-decoration: none;
  font-family: "Permanent Marker";
  white-space: nowrap;
`

export default props => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Headroom>
      <Nav>
        <LeftLinks>
          <IconLink href="https://github.com/DriesCruyskens" target="_blank">
            <Icon
              src={githubLogo}
              alt="github logo"
              rel="noopener noreferrer"
            />
          </IconLink>
          <IconLink href="https://www.instagram.com/mugenosu" target="_blank">
            <Icon
              src={instagramLogo}
              alt="instagram logo"
              rel="noopener noreferrer"
            />
          </IconLink>
        </LeftLinks>
        <CenterLinks>
          <Logo to="/" className="logo">
            {data.site.siteMetadata.title}
          </Logo>
        </CenterLinks>
        <RightLinks>
          <TextLink to="/about/">About</TextLink>
        </RightLinks>
      </Nav>
    </Headroom>
  )
}
