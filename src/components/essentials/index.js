import React, { Component } from 'react'
import './styles.css'
import Card from '../common/cards'
import {ParkingCardContent, ImportantItemsCardContent, LearningTracksCardContent} from './cardContent'

class Essentials extends Component {


    render() {
        
        return (
            <div>
                <h1 className="page-title">Essentials</h1>
                <div>
                    <Card title='Parking and Transportation' content={ParkingCardContent} />
                    <Card title='What should you bring to Shellhacks' content={ImportantItemsCardContent}/>
                    <Card title='Learning Tracks' content={LearningTracksCardContent} />
                    <Card title='Parking and Transportation' content={ParkingCardContent} />
                    <Card title='What should you bring to Shellhacks' content={ImportantItemsCardContent}/>
                    <Card title='Learning Tracks' content={LearningTracksCardContent} />
                </div>
            </div>
        )
    }
}

export default Essentials;

