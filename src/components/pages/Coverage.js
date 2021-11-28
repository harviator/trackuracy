import React from "react";
import CustomizeCoverage from "../../assets/images/coverage.png";
import TierChart from "../../assets/images/tier-chart.png";
import Image from 'react-bootstrap/Image';

function Coverage(props) {
  return (
    <div className="pages">
      <h2>Customize Your Coverage</h2>

      <p>
        Tailor any tier of a Trackuracy system at the time of deployment to meet your needs and budget. 
      </p>

      <Image
        className="img-fluid mx-auto d-block"
        src={CustomizeCoverage}
        alt="Real Time Location System Diagram"
      />

      <h3>DIFFERENT MARKETS, DIFFERENT NEEDS</h3>

      <p>
        Trackuracy is a scalable solution with configurations for simple tracking, monitoring access to restricted areas, or a comprehensive solution to identify asset location across your campus. Trackuracy offers three tracking tiers to provide varying levels of accuracy and functionality.
      </p>

      <Image
        className="img-fluid mx-auto d-block"
        src={TierChart}
        alt="Real Time Location System Diagram"
      />

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
          src={`https://www.youtube.com/embed/9rI9_O53eKM`}
          frameBorder="0"
          title="Trackuracy Video"
        />
      </div>

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
          src={`https://www.youtube.com/embed/9BDh3QqpMh4`}
          frameBorder="0"
          title="Trackuracy Video"
        />
      </div>

    </div>
  );
}

export default Coverage;