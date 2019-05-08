import React, { Component } from 'react'
import './styles.css'

class Landing extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="background">

                <div class="container" id="main">

                    <img id="brand" class="fade-in one" src={require('../../assets/frontpage/shellhacks.svg')} />

                    <div class="cohost fade-in two">
                        <h3 id="creed"><b>Florida's Largest Hackathon</b></h3>
                    </div>

                    <p id="details" class="fade-in three">September 20-22, 2019<br />Florida International University<br />Ocean Bank Arena</p>
                    {/* <!-- A unicode space is in this ^ element so that the logo doesnt shift upon the javascript loading --> */}

                    <div class="buttonsContainer fade-in three">
                        <button onclick="location.href = 'form.html';" class="buttons" id="register" type="button">
                            <h3>Sponsor</h3>
                        </button>
                        <button onClick="window.location.href='mailto:upe@fiu.edu?Subject=ShellHacks%20Sponsorship'" class="buttons" id="sponsor" type="button">
                            <h3>Register</h3> {/**ignore these for now */}
                        </button>
                    </div>
                </div>
                {/* <!-- Main End -->
                                    
                 <!-- Footer--> */}

                <div id="footer">
                    <div id="copyright">
                        ©
                        <a href="https://upe.cs.fiu.edu/">Upsilon Pi Epsilon at FIU</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;
