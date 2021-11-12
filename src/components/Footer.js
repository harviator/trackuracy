import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
import jvckenwood_logo from '../assets/images/jvckenwood_logo.png';

function Footer(props) {
    return (
        <footer className="justify-content-between">
            <p className="m-auto">&copy; {new Date().getFullYear()} JVCKenwood Canada Inc.</p>
            <img id="jvckenwood" src={jvckenwood_logo} alt="JVCKenwood Logo" />
        </footer >
    );
}

export default Footer;