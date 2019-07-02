import React, { Component, Fragment } from "react";
import "../styles.css";
import sponsors from "../../../config/data/sponsors";

class Sponsors extends Component {
  render() {
    let tempUrl =
      "http://jarederickson.com/wp-content/uploads/2012/12/10_batman-1989-illustration-cartoon-logo.png";

    let Logo = ({ logo, url, name, tier }) => {
      let logoClass;
      switch (tier) {
        case "sponsor":
          logoClass = "sponsor-img";
          break;
        case "partner":
          logoClass = "partner-img";
          break;
        case "temp":
          logoClass = "temp-img";
          break;
        default:
          logoClass = "";
      }
      return (
        <a
          className={logoClass}
          rel="noopener noreferrer"
          target="_blank"
          href={url}
        >
          <img
            style={{ width: "100%" }}
            className={`${tier}-img `}
            alt={name}
            src={tempUrl}
          />
        </a>
      );
    };

    return (
      <div className="sponsors-container">
        <div className="organizers-container">
          <h1 className="landing-section-title">Hosted By</h1>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="logo-container logo-hover"
            href="http://upe.cs.fiu.edu"
          >
            <img
              className="organizer-logo"
              alt="UPE Logo"
              src="http://2018.shellhacks.net/imgs/logos/2018/upe-national-logo.png"
            />
          </a>
          <p className="landing-section-paragraph">
            ShellHacks is organized by{" "}
            <a
              className="links"
              rel="noopener noreferrer"
              target="_blank"
              href="http://upe.cs.fiu.edu"
            >
              Upsilon Pi Epsilon (UPE)
            </a>
            ,the largest student organization for technology at{" "}
            <a
              className="links"
              rel="noopener noreferrer"
              target="_blank"
              href="http://fiu.edu"
            >
              FIU
            </a>
            , with support from companies, academic programs, and student
            organizations.
          </p>
        </div>

        <div className="organizers-container">
          <h1 className="landing-section-title">Cohost</h1>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="logo-container logo-hover hacky-comlumn-reverse-mobile"
            href="http://upe.cs.fiu.edu"
          >
            {" "}
            <img
              className="organizer-logo"
              alt="Microsoft Logo"
              src="http://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2qVsJ?ver=3f74"
            />
          </a>
          <p className="landing-section-paragraph">
            "
            <a
              className="links"
              rel="noopener noreferrer"
              target="_blank"
              href="http://microsoft.com"
            >
              Microsoft
            </a>{" "}
            enables digital transformation for the era of an intelligent cloud
            and an intelligent edge. Its mission is to empower every person and
            every organization on the planet to achieve more."
          </p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            className="logo-container logo-hover hacky-comlumn-reverse-web"
            href="http://upe.cs.fiu.edu"
          >
            {" "}
            <img
              className="organizer-logo"
              alt="Microsoft Logo"
              src="http://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2qVsJ?ver=3f74"
            />
          </a>
        </div>

        <h1 className="landing-section-title">Sponsors</h1>
        <div className="sponsor-logo-container">
          {sponsors.map((company, i) =>
            company.tier === "temp" ? (
              <Logo key={i} {...company} />
            ) : (
              <Fragment key={i} />
            )
          )}

          {sponsors.map((company, i) =>
            company.tier === "sponsor" ? (
              <Logo key={i} {...company} />
            ) : (
              <Fragment key={i} />
            )
          )}
        </div>

        <h1 className="landing-section-title">Partners</h1>
        <div className="sponsor-logo-container">
          {sponsors.map((company, i) =>
            company.tier === "partner" ? (
              <Logo key={i} {...company} />
            ) : (
              <Fragment key={i} />
            )
          )}
        </div>
      </div>
    );
  }
}

export default Sponsors;
