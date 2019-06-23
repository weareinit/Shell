import React, { Component } from "react";

import Faq from "./sections/faq";
import Tracks from "./sections/tracks";
import Sponsors from "./sections/sponsors";
import Schedule from "./sections/schedule";
import MainSection from "./sections/main";
import Info from "./sections/info";
import Thank from "./sections/thanks";

import "./styles.css";
import {
  GradientBackground,
  WaveBackground,
  Footer,
  ScrollContainer
} from "../common";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.goToAuth = this.goToAuth.bind(this);
    this.goToSponsor = this.goToSponsor.bind(this);
  }

  goToAuth = () => {
    this.props.history.push("/auth");
  };
  goToSponsor = () => {
    this.props.history.push("/sponsor");
  };

  render() {
    return (
      <div className="landing-container">
        {/* MLH BADGE */}
        <a
          id="mlh-trust-badge"
          style={{
            display: "block",
            maxWidth: 100,
            minWidth: 60,
            position: "fixed",
            right: 50,
            top: 0,
            width: "10%",
            zIndex: 10000
          }}
          href="https://mlh.io/seasons/na-2020/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2020-season&utm_content=white"
          target="_blank"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2020/mlh-trust-badge-2020-blue.svg"
            alt="Major League Hacking 2020 Hackathon Season"
            style={{ width: "100%" }}
          />
        </a>
        <ScrollContainer >
          <WaveBackground>
            {/* MAIN SECTION */}
            <section name="home" className="landing-section main-section">
              <MainSection {...this.props} />
            </section>

            {/* WHAT IS SHELLHACKS SECTION */}
            <section name="aboutus"className="landing-section info-section">
              <Info />
            </section>
          </WaveBackground>

          <GradientBackground>
            {/* TRACKS SECTION */}
            <section name="tracks" className="landing-section">
              <Tracks />
            </section>

            {/* SCHEDULE SECTION */}
            <section name="schedule" className="landing-section">
              <Schedule />
            </section>

            {/* FAQS SECTION */}
            <section name="faq"className="landing-section">
              <Faq />
            </section>

            {/* COMPANIES AND ORGS SECTION */}
            <section name="sponsor"className="landing-section">
              <Sponsors />
            </section>

            {/* FOOTER SECTION */}
            <section name ="thanks"className="landing-section">
              <Thank />
            </section>
            <Footer />
          </GradientBackground>
        </ScrollContainer>
      </div>
    );
  }
}

export default Landing;
