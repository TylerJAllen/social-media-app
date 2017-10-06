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
      userId: null,
      user: null,
      userPosts: null
    }
  }

  getUserByKey = () => {
    const { match: { params } } = this.props;
    let userId = params.user;

    db.ref(`/users/${userId}`).once('value').then( snapshot => {
      var user = snapshot.val().user;
      this.setState({ user });
    });
  }

  componentWillMount = () => {
    this.getUserByKey();
  }

  componentDidMount = () => {
    this.removeListener = auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ userId: user.uid });
      } else {
        this.setState({ userId: null, user: null });
      }
    });
  }

  componentWillUnmount = () => {
    this.removeListener();
  }


  render() {
    console.log("state.user ", this.state.user);
    console.log("state.userPosts ", this.state.userPosts);

    return (
      <div className="user-profile-container">

        <UserInfo user={this.state.user} />

        <UserContent user={this.state.user} />

      </div>
    );
  }
}

export default UserProfile;
