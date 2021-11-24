import React from 'react';
import kenwoodMain from '../assets/images/kenwood-main.png';

function Footer(props) {
    return (
        <footer>
            <p className="m-0">&copy; {new Date().getFullYear()} JVCKenwood Canada Inc.</p>
            <a href="https://ca.jvckenwood.com/" target="_blank" rel="noreferrer">
                <img id="kenwoodMain" src={kenwoodMain} alt="Kenwood Logo" />
            </a>
        </footer >
    );
}

export default Footer;