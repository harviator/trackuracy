import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {

    const location = useLocation();

    return (
        <header>
            <nav>
                <h1>Trackuracy</h1>
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