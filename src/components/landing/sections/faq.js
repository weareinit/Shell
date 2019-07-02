import React, { Component } from "react";
import { Card } from "../../common";
import "../styles.css";

import faqs from "../../../config/data/faq";

class Faq extends Component {
  render() {
    return (
      <div className="faq-card-container">
        <h1 className="landing-section-title">
          Frequently asked Questions (FAQs)
        </h1>
        {faqs.map((card, i) => {
          let props = {
            title: card.title,
            description: card.description,
            styleClassName: "landing-card",
            activeClassName: "active-landing-card",
            i: i
          };
          return <Card key={i} {...props} />;
        })}
      </div>
    );
  }
}

export default Faq;
