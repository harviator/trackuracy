import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import trackuracyLogo from "../assets/images/trackuracy-logo.png"

function Header(props) {

    const location = useLocation();

    return (
        <header>
            <Navbar collapseOnSelect expand="lg">
                    <Navbar.Brand href="#home">
                        <Link to="/" className={location.pathname === "/" ? "active menu" : "menu"}>
                            <img 
                                src={trackuracyLogo}
                                height="30"
                                alt="Track Accuracy Logo"
                            />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Link to="/tier1" className={location.pathname === "/tier1" ? "active menu" : "menu"}>
                                Tier 1
                            </Link>
                            <Link to="/tier2" className={location.pathname === "/tier2" ? "active menu" : "menu"}>
                                Tier 2
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;