import React from 'react';
import './styles.css';
import PropTypes from "prop-types";


function Post(props){
  return (
    <li className="post">
      <div className="image-container">
        <div className="post-image">
          <p>image</p>
        </div>
      </div>
      <div className="text-container">
        <div className="post-header">
          <p><strong>{props.name}</strong></p>
          <p>{props.username}</p>
        </div>
        <div className="post-text">
          <p>{props.text}</p>
        </div>
        <div className="post-footer">
          <p>footer</p>
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
