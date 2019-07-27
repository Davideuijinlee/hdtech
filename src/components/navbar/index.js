import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../../assets/images/logo_hd.webp'
import './nav.scss';

export default () => {
    return (
        <Fragment>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="clear" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        className=" logoImg d-inline-block align-top"
                        alt="HDTech Marketing Logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#services">SERVICES</Nav.Link>
                        <Nav.Link href="#work">OUR WORK</Nav.Link>
                        <NavDropdown title="SERVICES" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">GRAPHIC DESIGN</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">MARKETING</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">SEO</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                        <Nav.Link href="#about">ABOUT US</Nav.Link>
                        <Nav.Link href="#about">CONTACT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Fragment >

    )
}