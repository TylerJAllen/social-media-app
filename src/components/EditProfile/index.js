import React from "react";
import "./styles.css";
import { auth, db } from "../../firebase.js";
import { Redirect, Link } from "react-router-dom";
import User from "../../models/User.js";
import { updateUserInDB } from "../../models/firebaseActions.js";


class EditProfile extends React.Component {
  constructor(props){
    super(props);
    this.state={
      userId: null
    };
  }

  handleUpdateProfileFormSubmission = (event) => {
    event.preventDefault();
    const { _fullname, _username, _location, _bio } = this.refs;
    let fullname = _fullname.value;
    let username = _username.value;
    let location = _location.value;
    let bio = _bio.value;
    updateUserInDB(fullname, username, location, bio);
  }
  componentWillMount = () => {
    const { match: { params } } = this.props;
    let userId = params.user;
    this.setState({ userId });
  }

  render() {
    return (
      <div>
        <div>
          <h2>Edit or delete your account</h2>
        </div>
        <p>Complete the form below to update your information, if you wish to delete your account then simply click the delete button.</p>
        &nbsp;&nbsp;&nbsp;

        <form onSubmit={this.handleUpdateProfileFormSubmission}>
          <input
            ref="_fullname"
            type="text"
            id="fullname"
            name="fullname"
            placeholder="fullname"
            required />
          &nbsp;&nbsp;&nbsp;
          <input
            ref="_username"
            type="text"
            id="username"
            name="username"
            placeholder="username"
            required />
          &nbsp;&nbsp;&nbsp;
          <input
            ref="_location"
            type="text"
            id="location"
            name="location"
            placeholder="location"
            required />
          &nbsp;&nbsp;&nbsp;
          <input
            ref="_bio"
            type="textarea"
            id="bio"
            name="bio"
            placeholder="bio"
            required />
          <br/><br/>
          <button id="updateProfile" name="updateProfile">Update profile</button>
        </form>
        <br/><br/>
        <Link to={`/user/${this.state.userId}`}>
        <button>Return to your profile</button></Link>
      </div>
    );
  }
}

export default EditProfile;
