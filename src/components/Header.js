import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import trackuracyMain from "../assets/images/trackuracy-main.png";

function Header(props) {
    return (
        <header>
            <Navbar id="navbar" collapseOnSelect expand="lg">
                <Navbar.Brand>
                    <Nav.Link as={Link} to="/" className="p-0">
                        <img
                            src={trackuracyMain}
                            id="trackuracy-main"
                            alt="Trackuracy Logo"
                        />
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link as={Link} to="/" href="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" href="/about">
                            Why Trackuracy?
                        </Nav.Link>
                        <Nav.Link as={Link} to="/coverage" href="/coverage">
                            Customize Your Coverage
                        </Nav.Link>
                        {/* <Nav.Link as={Link} to="/case" href="/case">
                            Case Studies
                        </Nav.Link> */}
                        <Nav.Link as={Link} to="/more" href="/more">
                            Find Out More
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;