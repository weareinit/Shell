import React, { Component,Fragment } from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

class Navbar extends Component {

    constructor(props){
        super(props)
        this.state={
            open: false
        }
    }


    toggle= ()=>{
       const {open} = this.state
       this.setState({open: !open})
    }



    render() {
        return (
        <Fragment>
            <header className='menu'>
                <div className='mobile-logo'>ShellHacks</div>
                <div onClick={this.toggle} class='mobile-btn'>☰</div>
            </header>
        <div className={`nav ` + (this.state.open ? '' : ' hide')}>
            <div className='desktop-logo'>ShellHacks</div>
            <ul>
                <li className='toggle'><div onClick={this.toggle} >X</div></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li><Link to="/application">Application</Link></li>
                <li><Link to="/schedule">Schedule</Link></li>
                <li><Link to="profile">Profile</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
            </ul>
        </div>
        </Fragment>
        );
    }
}

export default Navbar;
