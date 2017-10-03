import React from 'react';
import Post from '../../models/Post.js';
import PropTypes from 'prop-types';
import firebase from '../../firebase.js';

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

    console.log("NewPost model ", newPost);
    console.log(newPost.user.fullname, newPost.user.username, newPost.user.location, newPost.user.description);
    const usersRef = firebase.database().ref('users');

    usersRef.on('value', (snapshot) => {
      snapshot.forEach(userSnapshot => {
        let postsList = userSnapshot.val().posts;
        let username = userSnapshot.val().username;
        //not working, explore firebase more
        if(username === signedInUser){
          userSnapshot.val().posts.unshift(newPost);
        }
      })
    });

    // this.props.onNewPostCreation(newPost);
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
