import React from "react";
import "./styles.css";
import { auth } from "../../firebase.js";
import { Redirect, Link } from "react-router-dom";
import User from "../../models/User.js";
import { addNewUserToDB } from "../../models/firebaseActions.js";

class LogInPage extends React.Component {

  handleSignUp = () => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var fullname = document.getElementById('fullname').value;
    var username = document.getElementById('username').value;
    var location = document.getElementById('location').value;
    var bio = document.getElementById('bio').value;

    let newUser = new User(fullname, username, location, bio);

    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }

    auth.createUserWithEmailAndPassword(email, password).then(user => {

      addNewUserToDB(newUser);

    }, error => {
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode === 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        alert(errorMessage);
      }

      console.log(error);
    });
  }

  componentDidMount () {
    document.getElementById('blitz-sign-up').addEventListener('click', this.handleSignUp, false);
  }

  render() {
    return (
      <div>
        {auth.currentUser && (
          <Redirect to="/" />
        )}
        <div>
          <h2>Welcome to Blitz</h2>
        </div>
        <div>
          <p>Complete the form below to sign up!</p>
          <input
            ref="_email"
            type="text"
            id="email"
            name="email"
            placeholder="Email"
            required />
          &nbsp;&nbsp;&nbsp;
          <input
            ref="_password"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            required />
          &nbsp;&nbsp;&nbsp;
          <input
            ref="_fullname"
            type="text"
            id="fullname"
            name="fullname"
            placeholder="Full Name"
            required />
          &nbsp;&nbsp;&nbsp;
          <input
            ref="_username"
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            required />
          &nbsp;&nbsp;&nbsp;
          <input
            ref="_location"
            type="text"
            id="location"
            name="location"
            placeholder="Location"
            required />
          &nbsp;&nbsp;&nbsp;
          <input
            ref="_bio"
            type="textarea"
            id="bio"
            name="bio"
            placeholder="Add a bio to your profile"
            required />
          <br/><br/>
          {/*<Link to="/login"><div id="blitz-sign-in" name="signup">Sign In</div></Link>*/}
          <Link to="/login"><button id="blitz-sign-in" name="signin">Sign In</button></Link>
          &nbsp;&nbsp;&nbsp;
          <button id="blitz-sign-up" name="signup">Sign Up</button>
        </div>

      </div>
    );
  }
}

export default LogInPage;
