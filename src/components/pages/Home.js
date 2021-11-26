import React from "react";
// import TrackuracyWebBox from "../../assets/images/trackuracy-web-box.jpg";
import rtls from "../../assets/images/rtls.png";
import Image from 'react-bootstrap/Image'

function Home(props) {
  return (
    <div className="pages">

      <div className="hero t-web-box-img mb-5">
        <h1>Trackuracy</h1>
        <p>Helping you get the right resources to the right place at the right time.</p>
      </div>

      <p>
        With Trackuracy, you can improve safety by tracking assets within your buildings, across all your campus locations, and in between buildings. Even while taking to the road in company vehicles, your view switches seamlessly between indoor and outdoor tracking. Best of all, it happens within a single application.
      </p>

      <p>
        In our fast-moving world, knowing the locations of the assets you rely on is critical. An integrated solution should work anywhere you need it to - indoors or outdoors. It’s common for companies to use GPS to locate assets outdoors. However, satellite signals typically are not strong enough to penetrate the roof of a building or through walls to provide accurate information for indoor location. GPS is generally inadequate for precise indoor location, performs poorly in multilevel structures, and can quickly drain a device’s battery. For in-building positioning, you need a solution that is designed specifically for this purpose.
      </p>

      <p>
        You need Trackuracy, the Real Time Location System (RTLS) from JVCKENWOOD. Trackuracy integrates indoor and outdoor tracking with KENWOOD radio communication systems and provides the tools you need to secure your environment.
      </p>

      <div
        className="video mt-5 mb-5"
        style={{
          position: "relative",
          paddingBottom: "56.25%" /* 16:9 */,
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
      </div>

      <h3>INTEGRATED TOOLS FOR INDOOR AND OUTDOOR TRACKING</h3>

      <p>
        GPS based tracking isn’t new. Whether you call it AVL or Fleet Management - tools to understand where vehicles are in near-real-time have been around for years. What is new is integrating indoor tracking with outdoor tracking in a single, easy to use platform.
      </p>

      <p>
        Trackuracy has standard outdoor functionality, such as alerts when assets approach a hazardous area. The system also comes with alerting and reporting built around speed limits and adds basic fleet maintenance tracking. The built-in tools allow users to track radio maintenance and repairs separate from their vehicle fleet.
      </p>

      <h3>REAL TIME LOCATION SYSTEM (RTLS)</h3>

      <p>
        An RTLS helps you get the correct resources to the right place at the right time - all visible to you as it happens. Real-time, live-action views, reporting and analytics with the ability to automate actions and notifications form the backbone of a Trackuracy system. The right mix of beacons and smart sensors, combined with GPS and the radio system you already have, enables simple, cost-effective real-time tracking, reporting, and recording of each asset’s location and status. Trackuracy is available in different tiers, making your solution customizable for the level of performance your needs require.
      </p>

      <Image
        className="img-fluid mx-auto d-block"
        src={rtls}
        alt="Real Time Location System Diagram"
      />

    </div>
  );
}

export default Home;