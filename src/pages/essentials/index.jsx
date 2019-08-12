/**
 * Essentials page
 */

import React from 'react'
import { Card } from '../../components'
import {
  ParkingCardContent,
  ImportantItemsCardContent,
  LearningTracksCardContent
} from './contents'
import './styles.css'

const Essentials = () => {
  let props = {
    styleClassName: 'dashboard-card align-title-icon',
    activeClassName: 'active-dashboard-card align-title-icon'
  }
  return (
    <div className='dashboard-page'>
      <h1>Essentials</h1>
      <div className='essentials-container'>
        <div className='support-description'>
          {/* <p>Below is a few things we thinks will</p> */}
        </div>
        <Card
          title='🚗 Directions & Transportation'
          content={ParkingCardContent}
          // content={<p>Details are coming soon</p>}
          //titleIcon='car'
          {...props}
        />
        <Card
          title='🧳 What to Bring'
          //titleIcon='suitcase-rolling'
          content={ImportantItemsCardContent}
          {...props}
        />
        {/* <Card
          title='💻 Learning Tracks'
          //titleIcon='laptop'
          content={LearningTracksCardContent}
          {...props}
        /> */}
      </div>
    </div>
  )
}

export default Essentials
