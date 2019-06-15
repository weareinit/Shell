//workshop tracks for the landing page
import React, { Component } from 'react'
import { ReactComponent as Shell } from '../../../assets/frontpage/shell.svg'
import '../styles.css'
import tracks from '../../../config/data/tracks'



class Tracks extends Component {

    //Fucntion that takes Data and renders card structure
    TrackItem = (trackParams) => {
        let { title, path, details, trackDetails } = trackParams;
        return (
            <div className='track-card-container'>
                <p className="track-card-item-title">{title}</p>
                <img className="holder-circle" alt="cirlcePlaceholder"
                    src={path} />
                <p className="track-card-item-description">{details}</p>
                <div>
                    {trackDetails.map(techDetails => (
                        <div className='shell-and-info'>
                            <Shell className='shell-icon' />
                            <p>{techDetails}</p>
                        </div>

                    ))}

                </div>
            </div>
        )
    }

    render() {
        return (
            <div className='tracks-section-container'>
                <h1 className="landing-section-title">Learning tracks</h1>
                <p className="landing-section-paragraph"> Sometimes the process of learning can get overwhelming. There’s so much to learn, and not enough time to devote to really diving in. When I get in a situation where I feel like giving up, or like I’ll never be able to learn what I want to learn in the time I have, it can help to turn to some outside inspiration.</p>
                <div className='track-items-container'>
                    {tracks.map((data) => (
                        this.TrackItem(data)
                    ))}

                </div>
            </div>
        )
    }
}

export default Tracks;