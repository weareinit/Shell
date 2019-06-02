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
        let { title, description, content } = this.props;
        let cardContent = (description ? <h4>{description}</h4> : content)
        return (
            <div>
                <button className='buttonInfo' onClick={this.handleClick}>
                    <h3>{title}</h3>
                </button>
                <div className='info'
                    style={this.state.clicked ? { display: 'flex' } : { display: 'none' }}>
                    {cardContent}
                </div>
            </div>
        )
    }
}


export default Card;

