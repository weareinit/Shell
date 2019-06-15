import React, { Component } from "react";
import "../styles.css";

class Sponsors extends Component {

    sponsorCard = (imagePath, size) => {
        let logoWidth = "0%";
        switch (size) {
            case 1:
                logoWidth = "40%";
                break;
            case 2:
                logoWidth = "30%";
                break;
            case 3:
                logoWidth = "20%";
                break;
            default:
                logoWidth = "10%";
                break;
        }
        return (
            <img alt="sponsor" src={imagePath} style={{ width: logoWidth }} />
        );
    };


    render() {
        return (
            <div className="sponsors-container">
                <div>
                    <h1 className="landing-section-title">Hosted By</h1>
                    <div className="sponsors-section-host-container">
                        <img className="sponsors-section-host-logo" alt="UPE Logo" src="http://2018.shellhacks.net/imgs/logos/2018/upe-national-logo.png" />
                        <p className="landing-section-paragraph">ShellHacks is organized by <a href="http://upe.cs.fiu.edu">Upsilon Pi Epsilon (UPE)</a>, the largest student organization for technology at FIU, with support from companies, academic programs, and student organizations.</p>
                    </div>
                </div>
                <div>
                    <h1 className="landing-section-title">Cohost</h1>
                    <div className="sponsors-section-co-host-container">
                        <p className="landing-section-paragraph">"Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge. Its mission is to empower every person and every organization on the planet to achieve more."</p>
                        <img className="sponsors-section-co-host-logo" alt="UPE Logo" src="http://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2qVsJ?ver=3f74" />
                    </div>
                </div>
                <h1 className="landing-section-title">Sponsors</h1>
                <div className="sponsor-logo-container">
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 1)}
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 1)}
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 1)}
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 1)}

                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 2)}
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 2)}
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 2)}
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 2)}
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 2)}
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 2)}

                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 3)}
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 3)}
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 3)}
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 3)}
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 3)}
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 3)}
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 3)}
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 3)}
                </div>

                <h1 className="landing-section-title">Partners</h1>
                <div className="sponsor-logo-container">
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 3)}
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 3)}
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 3)}
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 3)}
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 3)}
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 3)}
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 3)}
                    {this.sponsorCard("http://www.hibarnsley.com/wp-content/uploads/2017/06/dummy-logo.png", 3)}
                </div>
            </div>
        );
    }
}

export default Sponsors;
