import React from 'react';
import Post from '../../models/Post.js';
import PropTypes from 'prop-types';
import { auth, db } from '../../firebase.js';
import { getUserId, addNewPostToDB } from '../../models/firebaseActions.js';


class NewPostForm extends React.Component{
  constructor(){
    super();
    this.state={
      user: null,
      userId: null
    };
  }

  getUserDetailsById = () => {
    let userId = auth.currentUser.uid;

    db.ref(`/users/${userId}`).once('value').then( snapshot => {
      var user = snapshot.val().user;
      this.setState({ user, userId });
    });
  }

  componentWillMount = () => {
    this.getUserDetailsById();

  }

  handleNewPostFormSubmission = (event) => {
    event.preventDefault();
    const { _text } = this.refs;
    let user = this.state.user;
    user.text = _text.value;



    //static user inputs until get currentUser info updated
    var newPost = new Post(_text.value, user);
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
