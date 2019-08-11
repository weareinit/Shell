/**
 * Home Page
 */

import React from 'react'
import { announcementCardInfo } from '../../config/data/home'
import { Card } from '../../components'
import mixed from '../../utils/mixed'
import './styles.css'
const Home = ({ userData }) => {
  const { applicationStatus, firstName, avatarID } = userData
  let avatar = mixed.getAvatar(avatarID);
  return (
    <div className='dashboard-page'>
      <h1>Home</h1>
      <div className='home'>
        {/* User info */}
        <div className='user-info'>
          <img
            className='home-avatar'
            alt=''
            src={require(`../../assets/avatars/${avatar}`)}
          />
          {/* <Avatar className="home-avatar" /> */}
          <div className='user'>
            <h2>Welcome, {firstName}!</h2>
            {/* <h3>Event Points: {score}</h3> */}
          </div>

          <div className='application-status'>
            <h3>Application Status</h3>
            <Card
              activeClassName='active-application-status-button'
              styleClassName={`application-status-button ${(applicationStatus.toLowerCase() ===
                'applied' &&
                'applactions-status-applied') ||
                (applicationStatus.toLowerCase() === 'accepted' &&
                  'applactions-status-accepted') ||
                (applicationStatus.toLowerCase() === 'confirmed' &&
                  'applactions-status-confirmed')}`}
              title={mixed.wordCase(applicationStatus)}
              descStyles={{ margin: 'auto', display: 'block' }}
              description={
                (applicationStatus.toLowerCase() === 'applied' &&
                  'Your application has been received and you’ll be notified when its processed.') ||
                (applicationStatus.toLowerCase() === 'accepted' &&
                  'Shell yeah! You’ve been accepted into ShellHacks. Now go and confirm your attendance before the ship sails!') ||
                (applicationStatus.toLowerCase() === 'confirmed' &&
                  'Yeah buoy! You’re confirmed for ShellHacks. Sea ya at the shore!') ||
                'Water you doing? Fill out your application now to be considered for ShellHacks!'
              }
            />
          </div>
        </div>

        {/* announcements */}
        <div className='home-announcements'>
          <h3>Announcements</h3>
          {announcementCardInfo.map((data, i) => {
            let props = {
              title: data.title,
              description: data.description,
              date: data.date,
              styleClassName: 'dashboard-card',
              activeClassName: 'active-dashboard-card'
            }
            return <Card key={i} {...props} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Home
