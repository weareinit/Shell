import React, { Component, Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import './styles.css'
class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }


    toggle = () => {
        this.setState((prevState) => ({ open: !prevState.open }))
    }



    render() {
        return (
            <Fragment>
                <header className='menu'>
                    <div className='mobile-logo'>

                    </div>
                    <div onClick={this.toggle} class='mobile-btn'>☰</div>
                </header>
                <div className={`nav ` + (this.state.open ? '' : ' hide')}>
                    <div className='desktop-logo'>
                        <img id="dashboard-logo" className="" alt="placeholder" src={require('../../assets/frontpage/shellhacks.svg')} />
                        <img id="dashboard-shell" className="" alt="placeholder" src={require('../../assets/frontpage/shell.svg')} />
                        <h4 className="user">Jehf Doe</h4>
                    </div>
                    <ul id="options">
                        <li className='toggle'><div className="toggle-content" onClick={this.toggle} >&times;</div></li>
                        <li className="nav-item" onClick={this.toggle} ><Link to="/dashboard">Home</Link></li>
                        <li className="nav-item" onClick={this.toggle} ><Link to="/dashboard/application">Application</Link></li>
                        <li className="nav-item" onClick={this.toggle} ><Link to="/dashboard/essentials">Essentials</Link></li>
                        <li className="nav-item" onClick={this.toggle} ><Link to="/dashboard/profile">Profile</Link></li>
                        <li className="nav-item" onClick={this.toggle} ><Link to="/dashboard/support">Support</Link></li>
                    </ul>
                    <ul id="logout">
                        <li><Link to="/">Logout <FontAwesomeIcon icon="sign-out-alt" /></Link></li>
                    </ul>

                </div>
            </Fragment >
        );
    }
}

export default Navbar;
