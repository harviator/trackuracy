import React from "react";
import rtls from "../../assets/images/rtls.png";
import Image from 'react-bootstrap/Image'
import { Container } from "react-bootstrap";

function Home(props) {
  return (
    <div id="home">
      <h3>FEATURES</h3>
      <p>With Trackuracy, you can improve safety by tracking assets within your buildings, across all your campus locations, and in between
buildings. Even while taking to the road in company vehicles,
your view switches seamlessly between indoor and outdoor
tracking. Best of all, it happens within a single application.</p>
      <h6>Real Time Location System (RTLS)</h6>
      <p>An RTLS helps you get the correct resources to the right place at the right time - all visible to you as it happens.</p>
      <Container>
        <Image
          src={rtls}
          // height="61"
          alt="Track Accuracy Logo"
          fluid
        />
      </Container>
    </div>
  );
}

export default Home;