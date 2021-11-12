import React from 'react';
import jvckenwood_logo from '../assets/images/jvckenwood_logo.png';

function Footer(props) {
  return (
      <footer>
          <p className="m-auto">&copy; {new Date().getFullYear()} JVCKenwood Canada Inc.</p>
          <img src={jvckenwood_logo} alt="JVCKenwood Logo" />
      </footer>
    );
}

export default Footer;