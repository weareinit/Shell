import React from "react";

function SponsorCard({ img, url }) {
  return (
    <div className="sponsor-logo-card">
      <img
        style={{ height: "100%", width: "100%"}}
        onClick={() => window.open(url, "_blank")}
        src={
          "http://jarederickson.com/wp-content/uploads/2012/12/10_batman-1989-illustration-cartoon-logo.png"
        }
        alt="sponsor"
      />
    </div>
  );
}

export default SponsorCard;
