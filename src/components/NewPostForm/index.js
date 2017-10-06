import React from 'react';
import Post from '../../models/Post.js';
import PropTypes from 'prop-types';
import { auth } from '../../firebase.js';
import { getUserId, addNewPostToDB } from '../../models/firebaseActions.js';


class NewPostForm extends React.Component{

  handleNewPostFormSubmission = (event) => {
    event.preventDefault();
    const { _text } = this.refs;

    //static user inputs until get currentUser info updated
    var newPost = new Post(
      _text.value,
      auth.currentUser.uid,
      "tyler Allen",
      "TyHamm",
      "Portland, OR",
      "Junior Web Developer interning at AKQA!"
    );

    addNewPostToDB(newPost);
    this.props.hideFormAfterSubmission();
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleNewPostFormSubmission}>
          <div className="input-wrapper"><textarea
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
  hideFormAfterSubmission: PropTypes.func
};

export default NewPostForm;
