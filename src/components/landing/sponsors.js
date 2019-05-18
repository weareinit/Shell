import React, {Component} from 'react'

class Sponsors extends Component{

    sponsorCard = (imagePath, size) => {
        let logoWidth = '0%';
        switch(size){
            case 1:
                logoWidth = '40%';
                break;
            case 2:
                logoWidth = '30%';
                break;
            case 3:
                logoWidth = '20%';
                break;
            default:
                logoWidth = '10%';
                break;
        }
        return( 
            <img alt='sponsor' src={imagePath} style={{width:logoWidth}}/>
        )
    }
    

    render(){
        return(
            <div className='sponsors-container'>
                <div>
                    <h1 className="landing-section-title">Hosted By</h1>
                    <div className='host-section-detail-container'>
                        <img style={{marginRight:'20%', marginLeft:'15%'}}alt='UPE Logo' src='https://i2.wp.com/www.cis.fiu.edu/wp-content/uploads/2018/03/upe.png?resize=246%2C109&ssl=1'/>
                        <p>Brief description regarding the organization.Brief description regarding the organization.
                        Brief description regarding the organization.Brief description regarding the organization.
                        Brief description regarding the organization.Brief description regarding the organization.
                        Brief description regarding the organization.Brief description regarding the organization.
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className="landing-section-title">Cohost</h1>
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 1)}
                </div>
                <h1 className="landing-section-title">Sponsors</h1>
                <div className="sponsor-logo-container">
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 1)}
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 1)}
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 1)}
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 1)}

                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 2)}
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 2)}
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 2)}
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 2)}
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 2)}
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 2)}

                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 3)}
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 3)}
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 3)}
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 3)}
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 3)}
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 3)}
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 3)}
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 3)}
                </div>

                <h1 className="landing-section-title">Partenrs</h1>
                <div className="sponsor-logo-container">
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 3)}
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 3)}
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 3)}
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 3)}
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 3)}
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 3)}
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 3)}
                    {this.sponsorCard('http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png', 3)}
                </div>
            </div>
        )
    }
}

export default Sponsors
