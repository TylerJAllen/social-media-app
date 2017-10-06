import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

const UserInfo = ({ user }) => {

  const displayUserInfo = (input) => {
    if(input) {
      return (
        <div className="user-profile-box">
          <div className="hero-image-container">
            <img className='user-hero-image' src='http://lorempixel.com/400/400/sports' alt='avatar'/>
          </div>
          <div className="user-info">
            <div className="user-info-header">
              <div className="empty-placeholder"></div>
              <div className="user-avatar-container">
                <div className="user-avatar">
                  <img className='user-avatar-image' src='http://lorempixel.com/200/200/people' alt='avatar'/>
                </div>
              </div>
              <div className="user-actions">
                <button className="user-message-button">
                  <Link to='/messages'>message</Link>
                </button>
                <button className="user-follow-button">follow</button>
              </div>
            </div>
            <div className="user-fullname">{user.fullname}</div>
            <div className="user-username">{user.username}</div>
            <div className="user-bio-box">
              <p className="user-bio">{user.bio}</p>
            </div>
            <div className="user-bio-box">
              <p className="{user-location}">{user.location}</p>
            </div>
            <div className="user-stats">
              <div className="user-following">
                <span>n/a</span>
                <span>&nbsp;</span>
                <span>Following</span>
              </div>
              <div className="user-followers">
                <span>n/a</span>
                <span>&nbsp;</span>
                <span>Followers</span>
              </div>
              <div className="user-groups">
                <span>n/a</span>
                <span>&nbsp;</span>
                <span>Followers</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {

      return <p>"Loading..."</p>;
    }
  };

  let info = displayUserInfo(user);

  return info;
};

export default UserInfo;
