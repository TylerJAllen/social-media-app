import React from 'react';
import './styles.css';
import Post from '../../components/Post';
import PropTypes from 'prop-types';

function PostList(props){
  // console.log(props.masterPostList);

  return (
    <h1>Post List</h1>
    // <ol className="post-list">
    //   {props.masterPostList.map((post, index) =>
    //     <Post fullname={post.fullname}
    //       username={post.username}
    //       text={post.text}
    //       key={index}/>
    //   )}
    // </ol>
  );
}

PostList.propTypes = {
  masterPostList: PropTypes.array
};

export default PostList;
