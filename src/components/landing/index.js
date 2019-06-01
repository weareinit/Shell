import React, { Component } from 'react'

import Faq from './sections/faq'
import Tracks from './sections/tracks'
import Sponsors from './sections/sponsors'
import Schedule from './sections/schedule';

import './styles.css'
import MainSection from './sections/main';
import Info from './sections/shellhacksInfo';

class Landing extends Component {
    constructor(props) {
        super(props);

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

                {/* MAIN SECTION */}
                <section className="landing-section" >
                    <MainSection />
                </section>

                {/* WHAT IS SHELLHACKS SECTION */}
                <section className="landing-section" >
                    <Info />
                </section>

                {/* TRACKS SECTION */}
                <section className="landing-section" >
                    <h1 className="landing-section-title">Learning tracks</h1>
                    <Tracks />
                </section>

                {/* SCHEDULE SECTION */}
                <section className="landing-section" >
                    <h1 className="landing-section-title">Tentative Schedule</h1>
                    <Schedule />
                </section>

                {/* FAQS SECTION */}
                <section className="landing-section" >
                    <h1 className="landing-section-title">Frequently asked Questions (FAQ)</h1>
                    <Faq />
                </section>

                {/* COMPANIES AND ORGS SECTION */}
                <section className="landing-section" >
                    <Sponsors />
                </section>

                {/* FOOTER SECTION */}
                <section className="landing-section" >
                    <h1 className="landing-section-title">Thank you for love ShellHacks!</h1>
                </section>
            </div>
        )
    }
}

export default Landing;
