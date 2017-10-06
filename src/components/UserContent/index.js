import React from 'react';
import './styles.css';
import { Route, Switch, Link } from 'react-router-dom';
import PostList from '../PostList';

class UserContent extends React.Component {
  constructor() {
    super();
    this.state={ toggleKey: "posts" };
  }

  toggleUserContent = (input) => {
    if(input === "posts") {
      return "posts was selected";
    } else if (input === "media") {
      return "media was selected";
    } else if (input === "likes") {
      return "likes was selected";
    } else {
      return "something terrible has happened if this is showing!!";
    }
  }

  togglePosts = () => {
    this.setState({toggleKey: "posts"});
  }

  toggleMedia = () => {
    this.setState({toggleKey: "media"});
  }

  toggleLikes = () => {
    this.setState({toggleKey: "likes"});
  }

  componentDidMount () {
    document.getElementById('timelinePosts').addEventListener('click', this.togglePosts, false);
    document.getElementById('timelineMedia').addEventListener('click', this.toggleMedia, false);
    document.getElementById('timelineLikes').addEventListener('click', this.toggleLikes, false);
  }

  render() {

    return (
      <div className="timeline-container">
        <div className="timeline-nav-container">
          <ul className="timeline-nav">
            <li className="timeline-navlink" id="timelinePosts">
              <span className="timeline-navlink-route">Posts</span>
            </li>
            <li className="timeline-navlink" id="timelineMedia">
              <span className="timeline-navlink-route">Media</span>
            </li>
            <li className="timeline-navlink" id="timelineLikes">
              <span className="timeline-navlink-route">Likes</span>
            </li>
          </ul>
        </div>
        <div className="timeline">
          <p>{this.toggleUserContent(this.state.toggleKey)}</p>
        </div>
      </div>
    );
  }
}

export default UserContent;
