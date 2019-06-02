import React from 'react'
import './styles.css'
import { tracksData, essentialItems, optionalItems } from '../../data'

export const ParkingCardContent = (
    <div className='essentials-parking-card-content'>
        <div className='arena-info-container'>
            <img className="arena-maps-image" src="https://seatgeek.com/maps/plot/v5143-3939-1/1024x1024/concert-oceanfirst-bank-center.png" alt='mapsImage' />
            <div className="parking-content">
                <h3>Shellhacks is located at: </h3>
                <div>
                    <p>FIU's Ocean Bank Convocation Center
                        1180 SW 113th Ave, Miami, FL</p>
                    <p>Direction 1 Here</p>
                    <p>Direction 2 Here</p>
                    <p>Direction 3 Here</p>
                    <p>Direction 4 Here</p>
                    <p>Direction 5 Here</p>
                </div>
            </div>
        </div>
        <div>
            <h2>Parking</h2>
            <p>something here</p>
        </div>
        <div>
            <h2>Transportation</h2>
            <p>something else here</p>
        </div>
    </div>
)

export const ImportantItemsCardContent = (
    <div className="essentials-items-card-content">
        <div>Brief summary about the items that should be brought
        shellhacks and what they usually tento to be. Also warnings
        and a few things that ongoing hacks should know. </div>
        <div className="item-checklists">
            <div className='essential-items-list'>
                <h3>Essential Items</h3>
                <ul>
                    {essentialItems.map((item)=>
                        <li>{item}</li>
                        )}
                </ul>
            </div>
            <div className='optional-items-list'>
                <h3>Optional Items</h3>
                <ul>
                    {optionalItems.map((item)=>
                        <li>{item}</li>
                        )}
                </ul>
            </div>
        </div>
    </div>
)

export const LearningTracksCardContent = (
    <div className="learning-tracks-container">
        <div>Brief summary about what is a learning track and what you
            can possibly gain by doing a learning track at Shellhacks and
            how to choose your tracks and how to prepare for your track.</div>
        {tracksData.map((data) =>
            <div>
                <h2>{data.title}</h2>
                <div className="track-overview">
                    <img className="essentials-holder-circle" alt="cirlcePlaceholder" src={data.path} />
                    <div className="track-details">
                        {data.details}
                        <ul>
                        {data.trackDetails.map(techDetails => (

                            <li>{techDetails}</li>
                        ))}
                        </ul>
                        
                    </div>
                </div>
                <h2>Required Software and How to get them</h2>
                <div className="track-software">
                    {data.softwareNames.map(softwareLinks=>
                        <button className="software-button" onClick={() => window.open("https://Shellhacks.net")}>{softwareLinks}</button>
                        )}
                </div>
            </div>
        )}

    </div>
)
