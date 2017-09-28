import React from 'react';
import './styles.css';

class Post extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className="post flex-row">
        <div className="image-container">
          <div className="post-image">
            <p>image</p>
          </div>
        </div>
        <div className="text-container">
          <div className="post-header">
            <p>header</p>
          </div>
          <div className="post-content">
            <p>content</p>
          </div>
          <div className="post-footer">
            <p>footer</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Post;
