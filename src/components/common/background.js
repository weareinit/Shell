import React, { Component, Fragment } from 'react';

class WaveBackground extends Component {
    render() {
        return (
            <Fragment>
                <div className="wave-background-objects" id="wave-background-objects">
                    <div id="shore">
                        <div id="wetsand">
                            <img id="wetsand3" className="decor" alt="placeholder" src={require('../../assets/frontpage/wetsand3.svg')} />
                            <img id="wetsand2" className="decor" alt="placeholder" src={require('../../assets/frontpage/wetsand2.svg')} />
                            <img id="wetsand1" className="decor" alt="placeholder" src={require('../../assets/frontpage/wetsand1.svg')} />
                        </div>
                        <div id="surf">
                            <img id="surf3" className="decor" alt="placeholder" src={require('../../assets/frontpage/surf3.svg')} />
                            <img id="surf2" className="decor" alt="placeholder" src={require('../../assets/frontpage/surf2.svg')} />
                            {/* <img id="surf1" className="decor" alt="placeholder" src={require('../../assets/frontpage/surf1.svg')} /> */}
                        </div>
                    </div>
                </div>
                <div className="wave-background-child">  {this.props.children}</div>
            </Fragment>)
    }
}



class GradientBackground extends Component {//can add states for complex animations  as needed
    render() {
        return (
            <Fragment>
                <div className="gradient-background">
                    {this.props.children}
                </div>

            </Fragment>)
    }
}
export { WaveBackground, GradientBackground };