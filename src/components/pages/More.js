import React from "react";
import Document from "../../assets/documents/brochure.pdf";
import Brochure from "../../assets/images/brochure-snapshot.jpg";
import KenwoodWhite from "../../assets/images/kenwood-white.png";
import Image from 'react-bootstrap/Image';

function More(props) {
  return (
    <div className="pages">
      <div className="more-content">
        <h2>Want More Information?</h2>

        <div className="more-info">
          <div className="more-brochure">
            <h3>TRACKURACY BROCHURE</h3>
            <p>Download The Trackuracy Brochure:</p>
            <a href={Document} target="_blank" rel="noreferrer">
              <Image id="brochure" className="img-fluid mx-auto d-block" src={Brochure} alt={"Brochure Cover"} />
            </a>
          </div>

          <div className="more-contact">
            <h3>CONTACT US</h3>

            <a id="kenwood-link" href="https://ca.jvckenwood.com/" target="_blank" rel="noreferrer">
              <Image id="kenwood-white" className="img-fluid mx-auto d-block" src={KenwoodWhite} alt={"JVCKenwood logo"} />
            </a>

            <address>
              Email: <a id="email" href="mailto:trackuracy@ca.jvckenwood.com">trackuracy@ca.jvckenwood.com</a><br />
              <br />
              JVCKENWOOD Canada Inc.<br />
              6070 Kestrel Road<br />
              Mississauga, ON L5T 1S8
            </address>
          </div>
        </div>

        <div className="more-turnkey">
          <h3>TURNKEY SOLUTIONS FROM KENWOOD</h3>

          <p>
            At JVCKENWOOD, we understand that our customers need turnkey solutions, not just equipment.  We’ve leveraged customer feedback, our dealer network, and our own experience and expertise across many industries, to understand customer challenges and integrate our products and services with proven technologies. Trackuracy integrates indoor and outdoor tracking with KENWOOD radio communication systems and provides the tools you need to secure your environment. We have the resources to identify the optimum combination of equipment and software for your needs, so you get a better result as well as a single source for purchasing and support.
          </p>
        </div>
      </div>
    </div>
  );
}

export default More;