import React, { Component, Fragment } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../../assets/images/logo_hd.webp'

export default class NavBar extends Component {
    render() {
        const { textColor, headerColor, navSize } = this.props;

        return (
            <Fragment>
                <Navbar className={navSize} sticky="top" collapseOnSelect expand="lg" bg={headerColor} variant="dark">
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            className=" logoImg d-inline-block align-top"
                            alt="HDTech Marketing Logo"
                            text-align= 'center'
                        />
                        <div className={`branding d-inline-block ${textColor}`}>
                            HD TECH
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className={textColor} href="navFontStyle #about">ABOUT US</Nav.Link>
                            <Nav.Link className={textColor} href="#services">SERVICES</Nav.Link>
                            <Nav.Link className={textColor} ref="#work">OUR WORK</Nav.Link>
                            <NavDropdown title={
                                <span className={textColor}>
                                    SERVICES
                                </span>
                            } id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">GRAPHIC DESIGN</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">MARKETING</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">SEO</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className={textColor} href="#about">CONTACT</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment >
        )
    }

}