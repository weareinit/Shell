import React, { Component } from 'react'
import './styles.css'
import Card from '../common/cards'

class Essentials extends Component {

    
    render() {

        let cardContent = () => (
            <div>
                <img src='../../assets/arenaMapsImg.png' alt='mapsImage' />
                <div>
                    <h3>Shellhacks is located at: </h3>
                    <div>
                        <p>FIU's Ocean Bank Convocation Center
                        1180 SW 113th Ave, Miami, FL
    
                        Direction 1 Here
                        Direction 2 Here
                        Direction 3 Here
                        Direction 4 Here
                        Direction 5 Here</p>
                    </div>
                </div>
            </div>
        )
        return (
            <div className='essentials-container'>
                <h1 className="page-title">Essentials</h1>
                    <Card title='Parking and Transportation' content = {cardContent}/>
                    {/* <Card title='What should you bring to Shellhacks' />
                    <Card title='Learning Tracks' /> */}
            </div>
        )
    }
}

export default Essentials;

// const data = [
//     {
//         title: 'What is a Hackathon?',
//         description: 'Insert description here'
//     },
// ]