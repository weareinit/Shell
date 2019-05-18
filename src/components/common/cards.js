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
        let { title, description,content } = this.props;
        return (
            <div>
                <button className='buttonInfo' onClick={this.handleClick}>
                    {title}
                </button>
                <div className='info'
                    style={this.state.clicked ? { display: 'flex' } : { display: 'none' }}>
                    <h4>{description} </h4>
                    <div>
                        {content}
                    </div>
                </div>

            </div>
        )
    }
}


export default Card;

