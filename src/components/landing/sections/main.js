import React, { Component, Fragment } from "react"
import "./styles.css";

class MainSection extends Component {

    render() {
        return (
            <Fragment>
                <img id="brand" alt="brand" src={require('../../../assets/frontpage/shellhacks.svg')} />

                <div >
                    <h3 id="creed"><b>Florida's Largest Hackathon</b></h3>
                </div>

                <p id="details" >September 20-22, 2019<br />Florida International University<br />Ocean Bank Convention Center</p>

                <div className="buttonsContainer ">
                    <button onClick={this.goToSponsor} className="buttons" id="register" type="button">
                        <h3>Sponsor</h3>
                    </button>
                    <button onClick={this.goToAuth} className="buttons" id="sponsor" type="button">
                        <h3>Register</h3> {/**ignore these for now */}
                    </button>
                </div>
            </Fragment>
        )
    }

}
export default MainSection;