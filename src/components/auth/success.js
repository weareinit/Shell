import React, { Component } from "react";
import { WaveBackground } from "../common";

class Success extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        return (
            <WaveBackground>
                <div className="success-container ">
                    <div className="success-modal">
                        <p>Thanks for signing up! <br /> email confirmation is still in the work...<br /> </p>
                        <br />
                        <p onClick={this.props.showSuccess}>&larr;click here to go back</p>
                    </div>
                </div>
            </WaveBackground>
        );
    }
}

export default Success;