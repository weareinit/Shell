//workshop tracks for the landing page
import React, { Component } from 'react'
import { ReactComponent as Shell } from '../../../assets/frontpage/shell.svg'
import '../styles.css'
import {tracksData} from '../../../data'



class Tracks extends Component {

    //Fucntion that takes Data and renders card structure
    trackCard = (trackParams) => {
        let { title, path, details, trackDetails } = trackParams;
        return (
            <div className='track-card-container'>
                <p>{title}</p>
                <img className="holder-circle" alt="cirlcePlaceholder"
                    src={path} />
                <p style={{ textAlign: "center" }}>{details}</p>
                <div>
                    {trackDetails.map(techDetails => (
                        <div className= 'shell-and-info'>
                            <Shell className='shell' />
                            <p>{techDetails}</p>
                        </div>
                        
                    ))}
                    
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className='tracks-container'>
                <p className="landing-section-content-text"> is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley.</p>
                <div className='trackDesc'>
                    {tracksData.map((data) => (
                        this.trackCard(data)
                    ))}

                </div>
            </div>
        )
    }
}

export default Tracks;