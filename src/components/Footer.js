import React from 'react';
import kenwoodMain from '../assets/images/kenwood-main.png';
import Facebook from '../assets/images/facebook.png';
import Instagram from '../assets/images/instagram.png';
import LinkedIn from '../assets/images/linkedin.png';
import Twitter from '../assets/images/twitter.png';
import YouTube from '../assets/images/youtube.png';

function Footer(props) {
    return (
        <footer>

            <a href="https://ca.jvckenwood.com/" target="_blank" rel="noreferrer">
                <img id="kenwoodMain" src={kenwoodMain} alt="Kenwood Logo" />
            </a>


            <a href="https://www.facebook.com/JVCKenwoodCanada" target="_blank" rel="noreferrer">
                <img id="facebook" src={Facebook} alt="Facebook Logo" />
            </a>

            <a href="https://www.instagram.com/kenwoodcanadaofficial/" target="_blank" rel="noreferrer">
                <img id="instagram" src={Instagram} alt="Instagram Logo" />
            </a>

            <a href="https://www.linkedin.com/company/jvckenwood-canada/" target="_blank" rel="noreferrer">
                <img id="linkedin" src={LinkedIn} alt="LinkedIn Logo" />
            </a>

            <a href="https://twitter.com/jvckenwood_can" target="_blank" rel="noreferrer">
                <img id="twitter" src={Twitter} alt="Twitter Logo" />
            </a>

            <a href="https://www.youtube.com/channel/UC8Z5lfCggeK88BDvubvOlPg" target="_blank" rel="noreferrer">
                <img id="youtube" src={YouTube} alt="YouTube Logo" />
            </a>

            <p className="m-0">&copy; {new Date().getFullYear()} JVCKenwood Canada Inc.</p>

        </footer >
    );
}

export default Footer;