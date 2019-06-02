import React, { Component } from 'react'
import './styles.css'
import Card from '../common/cards'
import {ParkingCardContent, ImportantItemsCardContent, LearningTracksCardContent} from './cardContent'

class Essentials extends Component {
  cardContent = () => (
    <div>
      <img src="../../assets/arenaMapsImg.png" alt="mapsImage" />
      <div>
        <h3>Shellhacks is located at: </h3>
        <div>
          <p>
            FIU's Ocean Bank Convocation Center 1180 SW 113th Ave, Miami, FL
            Direction 1 Here Direction 2 Here Direction 3 Here Direction 4 Here
            Direction 5 Here
          </p>
        </div>
      </div>
    </div>
  );


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

