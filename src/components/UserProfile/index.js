import React from 'react';
import './styles.css';
import { Route, Switch, Link } from 'react-router-dom';
import PostList from '../PostList';

class UserProfile extends React.Component {
  

  getShortList = (input) => {
    const masterList = this.props.masterPostList;
    let shortList = [];

    shortList.push(masterList[0 + input]);
    shortList.push(masterList[3 + input]);
    shortList.push(masterList[6 + input]);

    return shortList;
  }


  render() {
    return (
      <div className="user-profile-container">
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
            <div className="user-fullname">tyler allen</div>
            <div className="user-username">tylerallen</div>
            <div className="user-bio-box">
              <p className="user-bio">I am creating this application.</p>
            </div>
            <div className="user-stats">
              <div className="user-following">
                <span>26</span>
                <span>&nbsp;</span>
                <span>Following</span>
              </div>
              <div className="user-followers">
                <span>54</span>
                <span>&nbsp;</span>
                <span>Followers</span>
              </div>
              <div className="user-groups">
                <span>5</span>
                <span>&nbsp;</span>
                <span>Followers</span>
              </div>
            </div>
          </div>
        </div>
        <div className="timeline-container">
          <div className="timeline-nav-container">
            <ul className="timeline-nav">
              <li className="timeline-navlink">
                <Link
                  className="timeline-navlink-route"
                  to='/user-profile'>Posts</Link>
              </li>
              <li className="timeline-navlink">
                <Link
                  className="timeline-navlink-route"
                  to='/user-profile/reposts'>Reposts</Link>
              </li>
              <li className="timeline-navlink">
                <Link
                className="timeline-navlink-route"
                to='/user-profile/likes'>Likes</Link>
              </li>
            </ul>
          </div>
          <div className="timeline">
            <Switch>
              <Route exact path='/user-profile'
                render = {props => <PostList {...props} masterPostList = {this.getShortList(0)} />
                }
              />
              <Route path='/user-profile/reposts'
                render = {props => <PostList {...props} masterPostList = {this.getShortList(1)} />
                }
              />
              <Route path='/user-profile/likes'
                render = {props => <PostList {...props} masterPostList = {this.getShortList(2)} />
                }
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
