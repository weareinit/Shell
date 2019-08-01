/**
 * user profile page
 */

import React from 'react'
import QRCode from 'qrcode.react'
import mixed from '../../utils/mixed'
import './styles.css'

const Profile = ({ userData }) => {
  let { shellID, avatar, firstName, lastName, major, schoolName } = userData
  const AVATAR = mixed.getAvatar(avatar)

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
              src={require(`../../assets/avatars/${AVATAR || 'turtle.png'}`)}
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
            <h3>ShellID</h3>
            <br />
            <p>
              This year we are using ShellID which is our brand new mind blown
              technology 🤯 that we definetely invented. Feel free to screenshot
              yours for faster access to our resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
