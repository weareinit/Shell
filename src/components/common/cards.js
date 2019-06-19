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
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        let { title, description, date, content } = this.props;
        let cardContent = (description ? <h4>{description}</h4> : content)
        return (
            <div className ="card-container">
                <div className='card-button' onClick={this.handleClick}>
                    <h3>{title}</h3>
                    <h4>{date}</h4>
                </div>
                <div className='card-content'
                    style={this.state.clicked ? { display: 'flex' } : { display: 'none' }}>
                    {cardContent}
                </div>
            </div>
        )
    }
}


export { Card };

