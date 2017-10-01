import React from 'react';
import './styles.css';
import Post from '../../components/Post';
import PropTypes from 'prop-types';

function PostList(props){
  console.log(props.masterPostList);
  return (
    <ol className="post-list">
      {props.masterPostList.map((post, index) =>
        <Post name={post.name}
          username={post.username}
          text={post.text}
          key={index}/>
      )}
      </ol>
  );
}

PostList.propTypes = {
  masterPostList: PropTypes.array
};

export default PostList;
