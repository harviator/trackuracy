import React from "react";
import { Link, useLocation } from "react-router-dom";
import trackuracyLogo from "../assets/images/trackuracy-logo.png"

function Navbar(props) {

    const location = useLocation();

    return (
        <header>
            <nav>
                <img src={trackuracyLogo} alt="Track Accuracy Logo" />
                <Link to="/" className={location.pathname === "/" ? "active menu" : "menu"}>
                    Home
                </Link>
                <Link to="/tier1" className={location.pathname === "/tier1" ? "active menu" : "menu"}>
                    Tier 1
                </Link>
                <Link to="/tier2" className={location.pathname === "/tier2" ? "active menu" : "menu"}>
                    Tier 2
                </Link>
            </nav>
        </header>
    );
}

export default Navbar;