import React, { Component } from 'react'
import {profileData} from '../../config/data/profile'
import './styles.css'

class Profile extends Component {

    render() {
        return (
            <div>
                <h1 className="dashboard-page-title">Profile</h1>
                <div className='profile-details-container'>
                    <div>
                        <h4>Avatar</h4>
                        <img className="holder-circle" alt="cirlcePlaceholder"
                            src='../assets/frontpage/shell.svg' />
                    </div>
                    <div>
                        <h4>Full Name</h4>
                        <p>{profileData.fullName}</p>
                        <h4>Major</h4>
                        <p>{profileData.major}</p>
                        <h4>School</h4>
                        <p>{profileData.school}</p>
                    </div>
                </div>
                <div>
                    <div className='qr-info'>
                        <img className="holder-circle" alt="qrPlaceholder"
                            src='../assets/qrcode.png' />
                        <div>
                            <p>Brief description of the QR code here lol Litter kitter
                                kitty litty little kitten big roar roar feed me mice cat
                                sit like bread. Purr</p>
                            <button className="submit-button">
                                <h3>Generate QR Code</h3>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Profile;