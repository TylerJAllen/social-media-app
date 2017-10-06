import React from 'react';
import './styles.css';
import { Route, Switch, Link } from 'react-router-dom';
import PostList from '../PostList';
import { db, auth, isAuthenticated } from "../../firebase.js";
import { getUserByKey } from "../../models/firebaseActions.js";
import UserInfo from "../UserInfo";
import UserContent from "../UserContent";

class UserProfile extends React.Component {
  constructor(){
    super();
    this.state = {
      profileKey: null,
      profileDetails: null,
      userId: null,
      user: null,
      userPosts: null,
    }
  }


  getProfileDetailsByKey = () => {
    const { match: { params } } = this.props;
    let profileKey = params.user;

    db.ref(`/users/${profileKey}`).once('value').then( snapshot => {
      var profileDetails = snapshot.val().user;
      this.setState({ profileDetails, profileKey });
    });
  }

  componentWillMount = () => {
    this.getProfileDetailsByKey();

  }

  componentDidMount = () => {
    this.removeListener = auth.onAuthStateChanged((user) => {
      if (user) {
        let userId = user.uid;
        db.ref(`/users/${userId}`).once('value').then( snapshot => {
          var user = snapshot.val().user;
          var userPosts = snapshot.val().userPosts;
          this.setState({ userId, user, userPosts });
        });

      } else {
        this.setState({ userId: null, user: null });
      }
    });
  }

  componentWillUnmount = () => {
    this.removeListener();
  }

  render() {
    console.log("state.profileKey", this.state.profileKey);
    console.log("state.profileDetails", this.state.profileDetails);
    console.log("state.userId", this.state.userId);
    console.log("state.user", this.state.user);
    return (
      <div className="user-profile-container">

        <UserInfo 
          profileKey={this.state.profileKey}
          profileDetails={this.state.profileDetails}
          user={this.state.user}
          userPosts={this.state.userPosts} />

        <UserContent
          user={this.state.user} />

      </div>
    );
  }
}

export default UserProfile;
