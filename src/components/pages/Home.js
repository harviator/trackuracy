import React from "react";
import Mine from "../../assets/video/mine.mp4";
import Rtls from "../../assets/images/rtls.png";
import Trackuracy from "../../assets/images/trackuracy-white.png";
import Image from 'react-bootstrap/Image';

function Home(props) {
  return (
    <div className="homepage">
      <div className="hero">
        <video autoPlay loop muted playsInline id="video" src={Mine}>
        </video>
        <div className="hero-content">
          <img id="trackuracy" src={Trackuracy} alt="Trackuracy Logo" />
          <p>Helping you get the right resources to the right place at the right time.</p>
        </div>
      </div>
      <div className="content">
        <div className="intro-content">
          <div className="intro-text">
            <p className="box box-1">
              With Trackuracy, you can improve safety by tracking assets within your buildings, across all your campus locations, and in between buildings. Even while taking to the road in company vehicles, your view switches seamlessly between indoor and outdoor tracking. Best of all, it happens within a single application.
            <br/>
            <br/>
              In our fast-moving world, knowing the locations of the assets you rely on is critical. An integrated solution should work anywhere you need it to - indoors or outdoors. It’s common for companies to use GPS to locate assets outdoors. However, satellite signals typically are not strong enough to penetrate the roof of a building or through walls to provide accurate information for indoor location. GPS is generally inadequate for precise indoor location, performs poorly in multilevel structures, and can quickly drain a device’s battery. For in-building positioning, you need a solution that is designed specifically for this purpose.
            <br/>
            <br/>
              You need Trackuracy, the Real Time Location System (RTLS) from JVCKENWOOD. Trackuracy integrates indoor and outdoor tracking with KENWOOD radio communication systems and provides the tools you need to secure your environment.
            </p>
          </div>
          <div className="box box-2" id="airport">
          </div>
        </div>

        { /* <div
          className="video"
          style={{
            position: "relative",
            paddingBottom: "56.25%",
            paddingTop: 25,
            height: 0
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
            src={`https://www.youtube.com/embed/Jsonibr3jBc`}
            frameBorder="0"
            title="Trackuracy Video"
          />
        </div> */ }

        <div className="tracking-content">
          <div className="tracking-text">
            <h3>INTEGRATED TOOLS FOR INDOOR AND OUTDOOR TRACKING</h3>
            <p>
              GPS based tracking isn’t new. Whether you call it AVL or Fleet Management - tools to understand where vehicles are in near-real-time have been around for years. What is new is integrating indoor tracking with outdoor tracking in a single, easy to use platform.
            <br />
            <br />
              Trackuracy has standard outdoor functionality, such as alerts when assets approach a hazardous area. The system also comes with alerting and reporting built around speed limits and adds basic fleet maintenance tracking. The built-in tools allow users to track radio maintenance and repairs separate from their vehicle fleet.
            </p>
            <h3>REAL TIME LOCATION SYSTEM (RTLS)</h3>
            <p>
              An RTLS helps you get the correct resources to the right place at the right time - all visible to you as it happens. Real-time, live-action views, reporting and analytics with the ability to automate actions and notifications form the backbone of a Trackuracy system. The right mix of beacons and smart sensors, combined with GPS and the radio system you already have, enables simple, cost-effective real-time tracking, reporting, and recording of each asset’s location and status. Trackuracy is available in different tiers, making your solution customizable for the level of performance your needs require.
            </p>
          </div>
          <Image
            id="rtls"
            src={Rtls}
            alt={"Real Time Location System Diagram"}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;