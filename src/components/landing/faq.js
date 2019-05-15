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
            <div className='pageContainer'>
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
        title: 'HTML Workshop',
        description: 'Insert description here'

    },
    {
        title: 'Javascript Workshop',
        description: 'Insert description here'
    },
    {
        title: 'Typescript Workshop',
        description: 'Insert description here'
    },
    {
        title: 'HTML Workshop',
        description: 'Insert description here'

    },
    {
        title: 'Javascript Workshop',
        description: 'Insert description here'
    },
    {
        title: 'Typescript Workshop',
        description: 'Insert description here'
    },
    {
        title: 'HTML Workshop',
        description: 'Insert description here'

    },
    {
        title: 'Javascript Workshop',
        description: 'Insert description here'
    },
    {
        title: 'Typescript Workshop',
        description: 'Insert description here'
    },
    {
        title: 'HTML Workshop',
        description: 'Insert description here'

    },
    {
        title: 'Javascript Workshop',
        description: 'Insert description here'
    },
    {
        title: 'Typescript Workshop',
        description: 'Insert description here'
    },
    {
        title: 'HTML Workshop',
        description: 'Insert description here'

    },
    {
        title: 'Javascript Workshop',
        description: 'Insert description here'
    },
    {
        title: 'Typescript Workshop',
        description: 'Insert description here'
    }
]