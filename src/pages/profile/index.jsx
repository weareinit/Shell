/**
 * user profile page
 */

import React from 'react'
import QRCode from 'qrcode.react'
import mixed from '../../utils/mixed'
import './styles.css'

const Profile = ({ userData }) => {
  let { shellID, avatarID, firstName, lastName, major, schoolName } = userData
  let avatar = mixed.getAvatar(avatarID);
  return (
    <div className='dashboard-page'>
      <h1>Profile</h1>
      <div className='profile-container'>
        <div className='profile-user'>
          <div className='avatar-container'>
            <h3>Avatar</h3>
            <br />
            <img
              className='holder-circle'
              alt='qrPlaceholder'
              src={require(`../../assets/avatars/${avatar}`)}
            />
          </div>
          <div className='profile-user-info'>
            <h3>Full Name</h3>
            <p>{firstName && mixed.wordCase(`${firstName} ${lastName}`)}</p>
            <br />
            <h3>Major</h3>
            <p>{mixed.wordCase(major)}</p>
            <br />
            <h3>School</h3>
            <p>{mixed.wordCase(schoolName)}</p>
          </div>
        </div>

        <div className='qr-info'>
          <div className='qr-image-container'>
            <div id='QRcode'>
              <QRCode size={180} fgColor='#665B50' value={shellID} />
            </div>
          </div>
          <div className='qr-description'>
            <h3>Shell ID</h3>
            <br />
            <p>
              Use your Shell ID to check-in and get your meals! Pull up the dashboard or take a screenshot with your shell-phone to access it later
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
