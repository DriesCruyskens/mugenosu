import React from "react"
import styled from "styled-components"
import menuIcon from "../images/menu.svg"
import closeIcon from "../images/close.svg"

const SidebarMenuIcon = styled.img`
    width: 1rem;
    opacity: 0.5;
    padding: 0;
    margin: 0;

    &:hover {
        cursor: pointer;
    }
`

const CloseIcon = styled.img`
    width: 2rem;

    &:hover {
        cursor: pointer;
    }
`

const UnstyledButton = styled.button`
    background: transparent;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;

    &:hover {
    background: transparent;
    box-shadow: 0px 0px 0px transparent;
    border: 0px solid transparent;
    text-shadow: 0px 0px 0px transparent;
    }
`

const SideBar = styled.div`
    padding: 10px;
    position: absolute;
    width: 200px;
    height: 110vh;
    transition: right 0.3s;
    background-color: black;
    top: 0;
    right: ${({ isOpen }) => isOpen ? "0" : "-200px"};
`

export default class SidebarMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };

        this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
    }

    toggleOpenClosed(e) {
        e.preventDefault()
        this.setState(state => ({ isOpen: !state.isOpen }));
    }

    render() {
        return (
            <>
                <UnstyledButton onClick={this.toggleOpenClosed} aria-label="sidebar menu open button">
                    <SidebarMenuIcon
                        src={menuIcon}
                        alt="sidebar menu icon"
                    />
                </UnstyledButton>

                <SideBar isOpen={this.state && this.state.isOpen}>
                    <UnstyledButton onClick={this.toggleOpenClosed} aria-label="sidebar menu close button" tabIndex={this.state.isOpen ? "false" : "-1"}>
                        <CloseIcon
                            src={closeIcon}
                            alt="sidebar menu close icon"
                        />
                    </UnstyledButton>
                    {/* Cloning all children so we can add prop to them. TabIndex prevents links from
                being focussed when the sidebar menu is closed. Using false to not make it work.
            */
                        React.Children.map(React.Children.toArray(this.props.children), (child, index) => {
                            return React.cloneElement(child, {
                                tabIndex: this.state && this.state.isOpen ? "false" : "-1",
                            });
                        })}
                </SideBar>
            </>
        )
    }
}
