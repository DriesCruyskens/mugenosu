import React from "react"
import { Link } from "gatsby"
import Headroom from "react-headroom"
import styled from "styled-components"
import instagramLogo from "../images/instagram-logo.svg"
import githubLogo from "../images/github-logo.svg"
import mugenosuLogo from "../images/mugenosu.svg"
import cartIcon from "../images/cart.svg"
import SidebarMenu from "./sidebarMenu"

const StyledNav = styled.nav`
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
  justify-content: end;
  width: 33.33%;
  text-align: right;
  color: black;
`

const NavLink = styled(props => <Link {...props} />)`
  margin-left: 1rem;
  color: black;
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.7;

  :hover {
    opacity: 1;
  }
`

const SidebarLink = styled(props => <Link {...props} />)`
  font-weight: 600;
  text-align: left;
  display:block;
  margin-left: 1rem;
  margin-bottom: 1rem;
  color: white;
  text-decoration: none;
  font-size: 2rem;

  :hover {
    opacity: 0.7;
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

const Logo = styled.img`
  width: 8rem;
  margin: .5rem 0 .3rem 0;
`

const CartButton = styled.button`
    background: transparent;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;
    padding: 0;
    position: relative;

    &:hover {
    background: transparent;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;
    }
`

const CartIcon = styled.img`
    width: 1rem;
    opacity: 0.5;
    padding: 0;
    margin: 0;
    padding-top: 5px;
    margin-left: 1rem;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 500px) {
      padding-top: 0;
    }
`

const CartItemCount = styled.span`
    --size: .8rem;
    position: absolute;
    right: -25%;
    top: 0;
    background: red;
    border-radius: 50%;
    width: var(--size);
    height: var(--size);
    font-size: .6rem;
    color: white;
    font-weight: bold;
`

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }

  renderMenu() {
    if (this.state && this.state.width < 500) {
      return <SidebarMenu mobile={this.state.width < 500}>
        <SidebarLink to="/about/">About</SidebarLink>
        <SidebarLink to="/shop/">Shop</SidebarLink>
      </SidebarMenu>
    } else {
      return <>
        <NavLink to="/about/">About</NavLink>
        <NavLink to="/shop/">Shop</NavLink>
      </>
    }
  }

  render() {
    return (
      <Headroom>
        <StyledNav>
          <LeftLinks>
            <IconLink href="https://github.com/DriesCruyskens" target="_blank" rel="noopener noreferrer">
              <Icon
                src={githubLogo}
                alt="github logo"
              />
            </IconLink>
            <IconLink href="https://www.instagram.com/mugenosu" target="_blank" rel="noopener noreferrer">
              <Icon
                src={instagramLogo}
                alt="instagram logo"
              />
            </IconLink>
          </LeftLinks>
          <CenterLinks>
            <Link to="/" className="logo">
              <Logo src={mugenosuLogo} alt="Mugenosu logo" />
            </Link>
          </CenterLinks>
          <RightLinks>
            {this.renderMenu()}
            <CartButton className="snipcart-checkout" aria-label="open cart button">
              <CartIcon
                src={cartIcon}
                alt="cart icon" />
              <CartItemCount className="snipcart-items-count">0</CartItemCount>
            </CartButton>
          </RightLinks>
        </StyledNav>
      </Headroom>
    )
  }
}
