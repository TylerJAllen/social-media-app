import React from 'react';
import Post from '../../models/Post.js';
import PropTypes from 'prop-types';
import { db, auth, storageKey, isAuthenticated } from '../../firebase.js';
// import { pushNewPostToDB, setKeyAsPostId } from '../../models/firebaseActions.js';


class NewPostForm extends React.Component{

  handleNewPostFormSubmission = (event) => {
    event.preventDefault();
    const { _text } = this.refs;
    const { signedInUser } = this.props;
    var newPost = new Post(
                        _text.value,
                        signedInUser.fullname,
                        signedInUser.username,
                        signedInUser.location,
                        signedInUser.description
                      );

    let newPostKey =db.ref().child('posts').push().key;

    let updates = {};
    updates[`/posts/${newPostKey}`] = newPost;
    updates[`/users/${signedInUser.id}/userPosts/${newPostKey}`] = newPost;

    db.ref().update(updates);


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
  onNewPostCreation: PropTypes.func,
  hideFormAfterSubmission: PropTypes.func
};

export default NewPostForm;
