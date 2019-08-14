/**
 * Reusable card component
 */

import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactMarkdown from 'react-markdown'
import {
faPlus
} from "@fortawesome/free-brands-svg-icons"; //need to pre-load in app.js
import PropTypes from 'prop-types'
import './styles.css'

/* - a "shell-styled" reuseable card template */
class Card extends Component {
  constructor (props) {
    super(props)
    this.state = {
      clicked: false,

    }
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  render () {
    let {
      title,
      description,
      date,
      content,
      styleClassName,
      activeClassName,
      titleIcon,
      descStyles,
      isMarkdown
    } = this.props

    let cardContent = description ? (
      isMarkdown ? (
        <ReactMarkdown source={description} />
      ) : (
        <p style={descStyles}>{description}</p>
        )
    ) : (
      content
    )
    let currenStyle = this.state.clicked ? activeClassName : styleClassName

    return (
      <div className='card-container'>
        <div
          className={'card-button ' + currenStyle}
          onClick={this.handleClick}
        >
          <div style={{display:"flex"}}> 
           {titleIcon && <FontAwesomeIcon icon={titleIcon} />}
          <div>
          <h3>{title}</h3>
          <p>{date}</p>
          </div>
          </div>
        <div>{this.state.clicked? <FontAwesomeIcon icon={"minus"} /> : <FontAwesomeIcon icon={"plus"} />}</div> 
        </div>
        <div
          className='card-content'
          style={this.state.clicked ? { display: 'flex' } : { display: 'none' }}
        >
          {cardContent}
        </div>

      </div>
    )
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  styleClassName: PropTypes.string.isRequired,
  activeClassName: PropTypes.string.isRequired,
  description: PropTypes.string,
  content: PropTypes.elementType,
  date: PropTypes.string,
  isMarkdown: PropTypes.bool
}

export { Card }
