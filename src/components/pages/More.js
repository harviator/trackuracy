import React from "react";
import Document from "../../assets/documents/brochure.pdf"

function More(props) {
  return (
    <div className="pages">
      <h2>Want More?</h2>

      <a href={Document} target="_blank" rel="noreferrer">Download Brochure</a>

      <h3 className="mt-5">TURNKEY SOLUTIONS FROM KENWOOD</h3>

      <p>
        At JVCKENWOOD, we understand that our customers need turnkey solutions, not just equipment.  We’ve leveraged customer feedback, our dealer network, and our own experience and expertise across many industries, to understand customer challenges and integrate our products and services with proven technologies. Trackuracy integrates indoor and outdoor tracking with KENWOOD radio communication systems and provides the tools you need to secure your environment. We have the resources to identify the optimum combination of equipment and software for your needs, so you get a better result as well as a single source for purchasing and support.
      </p>

      <h3>CONTACT US</h3>

      <p>
        JVCKENWOOD Canada Inc.<br />
        6070 Kestrel Road <br />
        Mississauga, ON L5T 1S8
      </p>

      <a href="mailto:trackuracy@ca.jvckenwood.com">trackuracy@ca.jvckenwood.com</a>

      <br />

      <a href="https://ca.jvckenwood.com/" target="_blank" rel="noreferrer">Kenwood</a>

    </div>
  );
}

export default More;