import React from 'react';
import './styles.css';

class Post extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className="post">
        <div className="post-image">
        <p>image</p>
        </div>
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
    );
  }
}

export default Post;
