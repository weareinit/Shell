import React, { Component } from 'react'
import './styles.css'

class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
          clicked: false
        }
      }

    handleClick = () => {
        this.setState({clicked : !this.state.clicked})
    }

    render(){
        let { title, time, description, location } = this.props.data;
        console.log(this.props.data);
        return (
            <div>
                <button className='buttonInfo' onClick={this.handleClick}>
                    <h3>{title} </h3>
                    <h4>{location}</h4>
                    <h4>{time}</h4>
                </button>
                <div className='info'
                style={this.state.clicked ? {display:'flex'}:{display:'none'}}>
                    <h4>{description} </h4>
                </div>

            </div>
        )
    }
}


export default Card;

