import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


function Post(props){
  return (
    <li className="post">
      <div className="content">
        <div className="post-header">
          <Link className='account-group' to='/user-profile'>
            <img className='avatar' src='http://lorempixel.com/73/73/people' alt='avatar'/>
            <span className='fullname'>{props.name}</span>
            <span>&nbsp;</span>
            <span className="username">@{props.username}</span><span>&nbsp;</span>
            <span className="time">&nbsp;
              <span>23min</span>
            </span>
          </Link>
        </div>
        <div className="text-container">
          <p className="post-text">{props.text}</p>
        </div>
        <div className="post-footer">
          <div className="post-action">
            <button className="post-action-button">
              <div className="icon-container">
                <span className="icon icon-medium">
                  X{/*insert LIKE icon here*/}
                </span>
              </div>
              <span className="post-action-count">45</span>
            </button>
          </div>
          <div className="post-action">
            <button className="post-action-button">
              <div className="icon-container">
                <span className="icon icon-medium">
                  X{/*insert DISLIKE icon here*/}
                </span>
              </div>
              <span className="post-action-count">2</span>
            </button>
          </div>
          <div className="post-action">
            <button className="post-action-button">
              <div className="icon-container">
                <span className="icon icon-medium">
                  X{/*insert REPOST icon here*/}
                </span>
              </div>
              <span className="post-action-count">23K</span>
            </button>
          </div>
          <div className="post-action">
            <button className="post-action-button">
              <div className="icon-container">
                <span className="icon icon-medium">
                  X{/*insert REPLY icon here*/}
                </span>
              </div>
              <span className="post-action-count">36</span>
            </button>
          </div>
          <div className="post-action post-action-message">
            <button className="post-action-button ">
              <div className="icon-container">
                <span className="icon icon-medium">
                  X{/*insert MESSAGE icon here*/}
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

Post.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Post;
