import React, { Component, Fragment } from "react";
import { faFacebookSquare, faInstagram, faLinkedin, faTwitterSquare, faDiscord } from '@fortawesome/free-brands-svg-icons';//need to pre-load in app.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "../styles.css";

class Thank extends Component {

    render() {

        return (
            <Fragment>
                <h1 className="landing-section-title">Thank you for love ShellHacks!</h1>
                <div className="shell-info-section-content">
                    <p className="landing-section-paragraph">
                        This is a long paragraph about how much we love and appreciate our Hackers, sponsors and partners.
                         From all of us at The Crooked Bookstore, welcome to our family! Thank you so much for your purchase of And Then There Were None.
                        It’s a classic, and we’re sure you’ll love it!
                         We’re a small, carefully curated bookshop, and we stand by all of our titles. That means if you don’t like the book, you can trade it for any other book in our store.
                         Just send your reply to this email and we’ll get everything sorted out.
                         Thank you again for choosing The Crooked Bookstore, we hope to hear from you again soon!
                     </p>
                </div>
                <div className="social-media-container">
                    <a href="http://upe.cs.fiu.edu"> <FontAwesomeIcon icon={faLinkedin} size="50" /></a>
                    <a href="http://upe.cs.fiu.edu"> <FontAwesomeIcon icon={faDiscord} /></a>
                    <a href="http://upe.cs.fiu.edu"> <FontAwesomeIcon icon={faFacebookSquare} /></a>
                    <a href="http://upe.cs.fiu.edu"> <FontAwesomeIcon icon={faInstagram} /></a>
                    <a href="http://upe.cs.fiu.edu"><FontAwesomeIcon icon={faTwitterSquare} /></a>
                    {/* <a href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf">MLH Code of Conduct</a> */}
                </div>
            </Fragment >
        )
    }
}
export default Thank;