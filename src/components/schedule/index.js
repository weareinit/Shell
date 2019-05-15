import React, { Component } from 'react'
import Card from './cards'

class Schedule extends Component {

    render() {
        return (
            <div className='pageContainer'>
                <h1 className="dashboard-page-title">Schedule</h1>
                {data.map(card => (
                    <Card data={card} />
                )
                )}
            </div>
        )
    }
}

export default Schedule;

// Dummy Data
const data = [
    {
        title: 'HTML Workshop',
        location: 'PG6 114',
        time: '10:00AM',
        description: 'Insert description here'

    },
    {
        title: 'Javascript Workshop',
        location: 'PG6 115',
        time: '11:00AM',
        description: 'Insert description here'
    },
    {
        title: 'Typescript Workshop',
        location: 'PG6 116',
        time: '12:00AM',
        description: 'Insert description here'
    }
]