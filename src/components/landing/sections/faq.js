import React, { Component } from "react";
import { Card } from "../../common";
import "../styles.css";

import data from '../../../config/data/faq'

class Faq extends Component {

  title = (title, location, time) => (
    <div>
      <h3>{title}</h3>
    </div>
  );

  render() {
    return (
      <div className='faq-card-container'>
        <h1 className="landing-section-title">Frequently asked Questions (FAQs)</h1>
        {data.map(card => {
          const { title, description } = card;
          return (<Card description={description} title={title} />)
        })}
      </div>
    )
  }
}

export default Faq;

