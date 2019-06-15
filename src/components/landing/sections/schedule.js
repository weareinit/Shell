import React, { Component } from "react";
import { Button } from "../../common";
import schedule from "../../../config/data/schedule";
import "../styles.css";

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: 1
    };
    this.changeDataSource = this.changeDataSource.bind(this);
  }

  displaySchedule = (event, id) => {
    let { time, description } = event;
    return (
      <div className="schedule-section-event" key={id}>
        <p className=" schedule-section-event-title" >{time}</p>
        <p className="landing-section-sub-heading">{description}</p>
      </div>
    );
  };

  changeDataSource = i => {
    this.setState({ dataSource: i });
  };

  render() {
    const { friday, saturday, sunday } = schedule;
    let data = friday;

    switch (this.state.dataSource) {
      case 1:
        data = friday;
        break;
      case 2:
        data = saturday;
        break;
      case 3:
        data = sunday;
        break;
      default:
        data = 'friendsday';
        break;
    }

    return (
      <div className="schedule-container">
        <h1 className="landing-section-title">Tentative Schedule</h1>
        <div className="schedule-button-container">
          <Button
            title="Friday, Sept 20"
            action={this.changeDataSource}
            id={1}
          />
          <Button
            title="Saturday, Sept 20"
            action={this.changeDataSource}
            id={2}
          />
          <Button
            title="Sunday, Sept 20"
            action={this.changeDataSource}
            id={3}
          />
        </div>

        {data.map((item, id) => this.displaySchedule(item, id))}
      </div>
    );
  }
}

export default Schedule;
