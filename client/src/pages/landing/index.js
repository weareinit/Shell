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
                {/* BACKGROUND ANIMATIONS  */}
                <div className="container" id="backgroundObjects">
                    <div id="shore">
                        <div id="wetsand">
                            <img id="wetsand3" className="decor" alt="placeholder" src={require('../../assets/frontpage/wetsand3.svg')} />
                            <img id="wetsand2" className="decor" alt="placeholder" src={require('../../assets/frontpage/wetsand2.svg')} />
                            <img id="wetsand1" className="decor" alt="placeholder" src={require('../../assets/frontpage/wetsand1.svg')} />
                        </div>
                        <div id="surf">
                            <img id="surf3" className="decor" alt="placeholder" src={require('../../assets/frontpage/surf3.svg')} />
                            <img id="surf2" className="decor" alt="placeholder" src={require('../../assets/frontpage/surf2.svg')} />
                            <img id="surf1" className="decor" alt="placeholder" src={require('../../assets/frontpage/surf1.svg')} />
                        </div>
                    </div>
                </div>
                {/* ANIMATIONS ENDS */}

                <div class="container" id="main">

                    <h1 id="brand" class="fade-in one"  >ShellHacks</h1>

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
