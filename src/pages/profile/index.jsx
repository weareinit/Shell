/**
 * user profile page
 */

import React, { Component } from "react";
import { profileData } from "../../config/data/profile";
import "./styles.css";

class Profile extends Component {
  render() {
    return (
      <div className="dashboard-page">
        <h1>Profile</h1>
        <div className="profile-container">
          <div className="profile-user">
            <div className="avatar-container">
              <h3>Avatar</h3>
              <br />
              <img
                alt="cirlcePlaceholder"
                src="https://image.flaticon.com/icons/svg/145/145846.svg"
              />
            </div>
            <div className="profile-user-info">
              <h3>Full Name</h3>
              <p>{profileData.fullName}</p>
              <br />
              <h3>Major</h3>
              <p>{profileData.major}</p>
              <br />
              <h3>School</h3>
              <p>{profileData.school}</p>
            </div>
          </div>

          <div className="qr-info">
            <div className="qr-image-container">
              <img
                className="holder-circle"
                alt="qrPlaceholder"
                src="https://images-eu.ssl-images-amazon.com/images/I/31Umxl57vfL.png"
              />
            </div>
            <div className="qr-description">
              <h3>ShellID</h3>
              <br />
              <p>
                Brief description of the QR code here lol Litter kitter kitty
                litty little kitten big roar roar feed me mice cat sit like
                bread. Purr
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
