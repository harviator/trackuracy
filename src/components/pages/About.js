import React from "react";
import Airport from "../../assets/images/airports.jpg";
import Casino from "../../assets/images/casinos.jpg";
import Education from "../../assets/images/education.jpg";
import Healthcare from "../../assets/images/healthcare.jpg";
import Hospitality from "../../assets/images/hospitality.jpg";
import Manufacturing from "../../assets/images/manufacturing.jpg";
import OilGas from "../../assets/images/oil-gas.jpg";
import Pexels from "../../assets/images/pexels.jpg";
import Stadiums from "../../assets/images/stadiums.jpg";
import Warehousing from "../../assets/images/warehousing.jpg";

function About(props) {
  return (
    <div className="pages">
      <div className="about-content">
        <div className="about-text">
          <h2>Why Trackuracy?</h2>

          <h3>FEATURES & BENEFITS</h3>

          <p>
            Trackuracy integrates indoor and outdoor functionality into simple-to-use tools, making it not just possible, but easy to solve big problems:
          </p>

          <ul>
            <li>Receive location information for all emergency calls</li>
            <li>Trace contacts and areas needing sanitization</li>
            <li>Increase productivity</li>
            <li>Shorten response times</li>
            <li>Document presence and responsiveness</li>
            <li>Reduce loss and liability</li>
            <li>Locate resources indoors</li>
            <li>Enhance worker safety</li>
            <li>Set up Response Team procedures and reporting rules</li>
            <li>Dynamically create a geo-fenced perimeter around an incident</li>
            <li>Visual awareness and integration with the radio emergency button and man-down features</li>
            <li>Allows you to assess response times and resources to drive operations</li>
          </ul>

          <h3>NEXT LEVEL WORKPLACE SAFETY & EFFICIENCY AT YOUR FINGERTIPS</h3>

          <ul>
            <li>Build situational awareness of regular activity so that developing situations stand out</li>
            <li>Define critical areas and increase alert levels, even within IS and ATEX environments</li>
            <li>Have confidence in the last known location of workers</li>
            <li>Prepare the procedures, and set up response team and reporting rules for automatic notifications</li>
            <li>Receive location information with all emergency calls including Man Down</li>
            <li>Confirm the arrival of assistance on scene</li>
            <li>Access to historical data and analytics </li>
            <li>Automate actions based on location data </li>
          </ul>
        </div>

        <div className="about-images">
          <ul className="about-gallery">
            <li>
              <img
                id="casino"
                src={Casino}
                alt="Casino"
              />
            </li>
            <li>
              <img
                id="education"
                src={Education}
                alt="Education"
              />
            </li>
            <li>
              <img
                id="healthcare"
                src={Healthcare}
                alt="Healthcare"
              />
            </li>
            <li>
              <img
                id="airport"
                src={Airport}
                alt="Airport"
              />
            </li>
            <li>
              <img
                id="manufacturing"
                src={Manufacturing}
                alt="Manufacturing"
              />
            </li>
            <li>
              <img
                id="oil-gas"
                src={OilGas}
                alt="Oil & Gas Industry"
              />
            </li>
            <li>
              <img
                id="pexels"
                src={Pexels}
                alt="Mining"
              />
            </li>
            <li>
              <img
                id="stadiums"
                src={Stadiums}
                alt="Stadiums"
              />
            </li>
            <li>
              <img
                id="warehousing"
                src={Warehousing}
                alt="Warehousing"
              />
            </li>
            <li>
              <img
                id="hospitality"
                src={Hospitality}
                alt="Hospitality"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;