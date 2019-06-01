import React, { Component } from 'react'
import Button from '../../common/button'
import { schedules } from '../data'
import '../styles.css'

class Schedule extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: 1,
        }
    }

    displaySchedule = (event) => {
        let { time, description } = event;
        return (
            <h5 id>{time}<br />{description}</h5>
        )
    }


    render() {
        const { friday, saturday, sunday } = schedules;
        let data = {};

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
                break;
        }

        return (
            <div>
                <div className="schedule-button-container">
                    <Button props={{ title: "hello" }} />
                    <Button />
                    <Button />
                </div>
                {data.map((item, id) => (this.displaySchedule(item, id)))}
            </div>
        )
    }
}

export default Schedule;