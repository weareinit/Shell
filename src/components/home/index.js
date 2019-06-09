import React, { Component } from 'react'
import { individualData } from '../../data/home'
import './styles.css'
class Home extends Component {

    render() {
        let { fullName, score, status } = individualData;
        return (
            <div id="home">
                <h1 className="dashboard-page-title">Home</h1>

                <img src='../../assets/frontpage/shell.svg' alt='avatar' />

                <h2>Welcome, {fullName}!</h2>
                <h3>Score: {score}</h3>

                <h3>Application Status:</h3>
                <button className='application-status-button'>
                    <h3>{status}</h3>
                </button>
            </div>
        )
    }
}

export default Home;