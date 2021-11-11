import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import trackuracyLogo from "../assets/images/trackuracy-logo.png"

function Header(props) {

    return (
        <header>
            <Navbar collapseOnSelect expand="sm">
                <Navbar.Brand>
                    <Nav.Link as={Link} to="/">
                        <img
                            src={trackuracyLogo}
                            height="30"
                            alt="Track Accuracy Logo"
                        />
                    </Nav.Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link as={Link} to="/tier1">
                            Tier 1
                        </Nav.Link>
                        <Nav.Link as={Link} to="/tier2">
                            Tier 2
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default Header;

/* Notes:
If I swtich back to "Link" I need - className={location.pathname === "/tier2" ? "activemenu menu" : "menu"}
*/