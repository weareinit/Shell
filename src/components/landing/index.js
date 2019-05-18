import React, { Component } from 'react'
import FAQ from './faq'
import './styles.css'

class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        this.goToAuth = this.goToAuth.bind(this);
        this.goToSponsor = this.goToSponsor.bind(this);
    }

    goToAuth = () => {
        this.props.history.push('/auth')
    }
    goToSponsor = () => {
        this.props.history.push('/sponsor')
    }
    render() {
        return (
            <div className="landing-container">

                <div className="landing-section" id="main">

                    <img id="brand" class="fade-in one" src={require('../../assets/frontpage/shellhacks.svg')} />

                    <div class="cohost fade-in two">
                        <h3 id="creed"><b>Florida's Largest Hackathon</b></h3>
                    </div>

                    <p id="details" class="fade-in three">September 20-22, 2019<br />Florida International University<br />Ocean Bank Convention Center</p>
                    {/* <!-- A unicode space is in this ^ element so that the logo doesnt shift upon the javascript loading --> */}

                    <div class="buttonsContainer fade-in three">
                        <button onClick={this.goToSponsor} class="buttons" id="register" type="button">
                            <h3>Sponsor</h3>
                        </button>
                        <button onClick={this.goToAuth} class="buttons" id="sponsor" type="button">
                            <h3>Register</h3> {/**ignore these for now */}
                        </button>
                    </div>
                </div>


                <div className="landing-section" id="main">
                    <div className="left-section-details">
                        <h1 className="landing-section-title">What is ShellHacks?</h1>
                        <p className="landing-section-content-text"> is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type
                            specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged</p>
                    </div>
                </div>

                <div className="landing-section" id="main">
                    <div className="landing-section-deatils">
                        <h1 className="landing-section-title">Learning tracks</h1>
                        <p className="landing-section-content-text"> is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley.</p>
                    </div>
                </div>

                <div className="landing-section" id="main">
                    <div className="landing-section-deatils">
                        <h1 className="landing-section-title">Tentative Schedule</h1>
                    </div>
                </div>

                <div className="landing-section" id="main">
                    <div className="landing-section-deatils">
                        <h1 className="landing-section-title">Frequently asked Questions (FAQ)</h1>
                        <div className='scrollContainer'>
                            <div className='scrollFAQ'>
                                <FAQ/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="landing-section" id="main">
                    <div className="landing-section-deatils">
                        <h1 className="landing-section-title">Sponsors</h1>
                    </div>
                </div>

                <div className="landing-section" id="main">
                    <div className="landing-section-deatils">
                        <h1 className="landing-section-title">Thank you for love ShellHacks!</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;
