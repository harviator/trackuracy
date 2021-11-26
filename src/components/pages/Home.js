import React from "react";
import rtls from "../../assets/images/rtls.png";
import Image from 'react-bootstrap/Image'

function Home(props) {
  return (
    <div className="pages">
      <h3>FEATURES</h3>
      <p>
        With Trackuracy, you can improve safety by tracking assets within your buildings, across all your campus locations, and in between
        buildings. Even while taking to the road in company vehicles,
        your view switches seamlessly between indoor and outdoor
        tracking. Best of all, it happens within a single application.
      </p>
      <h6>Real Time Location System (RTLS)</h6>
      <p>An RTLS helps you get the correct resources to the right place at the right time - all visible to you as it happens.</p>
      <Image
        className="img-fluid mx-auto d-block"
        src={rtls}
        alt="Real Time Location System Diagram"
      />
      
    </div>
  );
}

export default Home;