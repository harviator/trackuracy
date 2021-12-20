import React from "react";
import CustomizeCoverage from "../../assets/images/coverage.png";
import TierChart from "../../assets/images/tier-chart.png";
import Image from 'react-bootstrap/Image';

function Coverage(props) {
  return (
    <div className="pages">

      <h2>Customize Your Coverage</h2>

      <div className="coverage-text">

        <div className="tailored">
          <div className="tailored-text">
            <h3>TAILORED TIERS</h3>

            <p>
              Tailor any tier of a Trackuracy system at the time of deployment to meet your needs and budget.
            </p>
          </div>

          <div className="tailored-image">
            <Image
              className="img-fluid mx-auto d-block"
              src={CustomizeCoverage}
              alt={"Coverage Diagram"}
            />
          </div>
        </div>

        <div className="tier">
          <div className="tier-text">
            <h3>DIFFERENT MARKETS, DIFFERENT NEEDS</h3>

            <p>
              Trackuracy is a scalable solution with configurations for simple tracking, monitoring access to restricted areas, or a comprehensive solution to identify asset location across your campus. Trackuracy offers three tracking tiers to provide varying levels of accuracy and functionality.
            </p>
          </div>

          <div className="tier-image">
            <Image
              className="img-fluid mx-auto d-block"
              src={TierChart}
              alt={"Real Time Location System Diagram"}
            />
          </div>
        </div>
      </div>

      <div className="coverage-videos">
        <div className="video-container">
          <iframe
            className="cvideo1"
            src={`https://www.youtube.com/embed/9rI9_O53eKM`}
            frameBorder="0"
            title="Trackuracy Video"
          />
        </div>

        <div className="video-container">
          <iframe
            className="cvideo2"
            src={`https://www.youtube.com/embed/9BDh3QqpMh4`}
            frameBorder="0"
            title="Trackuracy Video"
          />
        </div>
      </div>
    </div>
  );
}

export default Coverage;