import React, {Component} from 'react'
import {ReactComponent as SpotifyLogo} from '../../assets/frontpage/spotify.svg'

class Sponsors extends Component{

    render(){
        return(
            <div>
                <div>
                    <h1 className="landing-section-title">Hosted By</h1>
                    <div className='host-section-detail-container'>
                        <img style={{marginRight:'20%'}}alt='UPE Logo' src='https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/03/upe.png?resize=246%2C109&ssl=1'/>
                        <p>Brief description regarding the organization</p>
                    </div>
                </div>
                <div>
                    <h1 className="landing-section-title">Cohost</h1>
                    <SpotifyLogo/>
                </div>
                <h1 className="landing-section-title">Sponsors</h1>
                <h1 className="landing-section-title">Partenrs</h1>
            </div>
        )
    }
}

export default Sponsors