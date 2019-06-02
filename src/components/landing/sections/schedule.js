import React, { Component } from "react";
import Button from "../../common/button";
import { schedules } from "../../../data";
import "./styles.css";

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: 1
    };
    this.changeDataSource = this.changeDataSource.bind(this);
  }

  displaySchedule = event => {
    let { time, description } = event;
    return (
      <p id>
        {time}
        <br />
        {description}
      </p>
    );
  };

  changeDataSource = i => {
    this.setState({ dataSource: i });
  };

  render() {
    const { friday, saturday, sunday } = schedules;
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
    }

    return (
      <div className="schedule-container">
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
