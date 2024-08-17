import React from 'react';
import contactIcon from "../assets/contact.png";


export default function RecentUser() {
  return (
    <div>
      <div className="recent-users">
        <div className="icon-container">
          <img src={contactIcon} alt="Contact Icon" className="contact-icon" />
        </div>
        <div className="text-container">
          <p className="user-id">co_M_yo</p>
          <p className="user-details">Test Bot2do : Support User</p>
        </div>
      </div>

      <div className="recent-users">
        <div className="icon-container">
          <img src={contactIcon} alt="Contact Icon" className="contact-icon" />
        </div>
        <div className="text-container-recent">
          <p className="user-id">co_M_yo</p>
          <p className="user-details">Test Bot2do : Support User</p>
        </div>
      </div>

    </div>
  )
}
