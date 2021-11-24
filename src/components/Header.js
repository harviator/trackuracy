import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import trackuracyMain from "../assets/images/trackuracy-main.png";

function Header(props) {

    return (
        <header>
            <Navbar collapseOnSelect expand="sm">
                <Navbar.Brand>
                    <Nav.Link as={Link} to="/" className="p-0">
                        <img
                            src={trackuracyMain}
                            height="49"
                            alt="Trackuracy Logo"
                        />
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link as={Link} to="/tier1" href="/tier1">
                            Tier 1 Overview
                        </Nav.Link>
                        <Nav.Link as={Link} to="/tier2" href="/tier2">
                            Tier 2 Overview
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;