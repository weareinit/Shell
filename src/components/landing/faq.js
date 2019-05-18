import React, { Component } from 'react'
import Card from '../common/cards'

class Schedule extends Component {

    title = (title, location, time) => (
        <div>
            <h3>{title}</h3>
        </div>
    )


    render() {
        return (
            <div className='faqCardContainer'>
                {data.map(card => {
                    const { location, title, time, description } = card;
                    return (<Card description={description} title={this.title(title, location, time)} />)
                }
                )}
            </div>
        )
    }
}

export default Schedule;

// Dummy Data
const data = [
    {
        title: 'What is a Hackathon?',
        description: 'Insert description here'

    },
    {
        title: 'DO you have to hack to participate?',
        description: 'Insert description here'
    },
    {
        title: 'Will there be food?',
        description: 'Insert description here'
    },
    {
        title: 'Will there be Travel Reimbersement?',
        description: 'Insert description here'
    },
    {
        title: 'What is a Hackathon?',
        description: 'Insert description here'

    },
    {
        title: 'DO you have to hack to participate?',
        description: 'Insert description here'
    },
    {
        title: 'Will there be food?',
        description: 'Insert description here'
    },
    {
        title: 'Will there be Travel Reimbersement?',
        description: 'Insert description here'
    }
]