import React from 'react';
import jvckenwood_logo from '../assets/images/jvckenwood_logo.png';

function Footer(props) {
    return (
        <footer>
            <p className="m-0">&copy; {new Date().getFullYear()} JVCKenwood Canada Inc.</p>
            <a href="https://ca.jvckenwood.com/" target="_blank" rel="noreferrer">
                <img id="jvckenwood" src={jvckenwood_logo} alt="JVCKenwood Logo" />
            </a>
        </footer >
    );
}

export default Footer;