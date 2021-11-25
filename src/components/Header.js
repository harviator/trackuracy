import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import trackuracyMain from "../assets/images/trackuracy-main.png";

function Header(props) {

    return (
        <header>
            <Navbar fixed="top" collapseOnSelect expand="sm" id="navbar">
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
                        <Nav.Link as={Link} to="/" href="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/whytrackuracy" href="/whytrackuracy">
                            Why Trackuracy?
                        </Nav.Link>
                        <Nav.Link as={Link} to="/customizecoverage" href="/customizecoverage">
                            Customize Your Coverage
                        </Nav.Link>
                        <Nav.Link as={Link} to="/findoutmore" href="/findoutmore">
                            Find Out More
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;