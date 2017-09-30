import React from 'react';
import Post from '../../models/Post.js';
import PropTypes from 'prop-types';

class NewPostForm extends React.Component{

  handleNewPostFormSubmission = (event) => {
    event.preventDefault();
    const { _name, _username, _text } = this.refs;
    var newPost = new Post(_name.value, _username.value, _text.value);
    this.props.onNewPostCreation(newPost);
    this.props.hideFormAfterSubmission();
    console.log("new post: ", newPost);
  }
  render(){
    return (
      <div>
        <form onSubmit={this.handleNewPostFormSubmission}>
          <div><input
            ref="_name"
            type="text"
            id="name"
            placeholder="Name" /></div>
          <div><input
            ref="_username"
            type="text"
            id="username"
            placeholder="Username" /></div>
          <div><textarea
            ref="_text"
            type="text"
            id="text"
            placeholder="What's happening?" /></div>
          <button type="submit">Submit</button>
          </form>
        </div>
    );
  }
}

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func,
  hideFormAfterSubmission: PropTypes.func
};

export default NewPostForm;
