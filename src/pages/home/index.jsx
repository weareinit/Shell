/**
 * Home Page
 */

import React from 'react'
import { announcementCardInfo } from '../../config/data/home'
import { Card } from '../../components'
import mixed from '../../utils/mixed'
import './styles.css'
const Home = ({ userData }) => {
  const { applicationStatus, firstName, avatar } = userData
  return (
    <div className='dashboard-page'>
      <h1>Home</h1>
      <div className='home'>
        {/* User info */}
        <div className='user-info'>
          <img
            className='home-avatar'
            alt=''
            src={require(`../../assets/avatars/turtle.png`)}
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
                  "Please be patient, we'll be sending out acceptance emails soon") ||
                (applicationStatus.toLowerCase() === 'accepted' &&
                  'Make sure to confirm your spot ASAP') ||
                (applicationStatus.toLowerCase() === 'confirmed' &&
                  "You're all set! Can't wait to see you at ShellHacks 😊") ||
                'Please fill out the application as soon as posible to secure your stop at ShellHacks.'
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
