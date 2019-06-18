import React, { Component } from "react";
import { Button } from "../../common";
import "../styles.css";

class MainSection extends Component {

    render() {
        return (

            <div className="main-section-container">

                <div className="main-section-details-container">
                    <img className="main-section-details-logo" alt="ShellHacks Wordmark" src={require("../../../assets/frontpage/shellhacks.svg")} />
                    <h1 className="main-section-details-creed">Florida's Largest Hackathon</h1>
                    <p className="main-section-details-specific" >September 20-22, 2019<br />Florida International University<br />Ocean Bank Convention Center</p>
                </div>

                <div className="main-section-buttons-container ">
                    <Button
                        title="Sponsor"
                    />
                    <Button
                        title="Register"
                    />
                </div>
            </div>

        );
    }

}
export default MainSection;