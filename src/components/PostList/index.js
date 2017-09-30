import React from 'react';
import './styles.css';
import Post from '../../components/Post';
import PropTypes from 'prop-types';

function PostList(props){
  console.log(props.postList);
  return (
    <ol className="post-list">
      {props.postList.map((post, index) =>
        <Post name={post.name}
          username={post.username}
          text={post.text}
          key={index}/>
      )}
      </ol>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
};

export default PostList;
