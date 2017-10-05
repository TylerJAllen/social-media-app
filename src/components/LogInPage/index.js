import React from 'react';
import './styles.css';
import { auth } from '../../firebase.js';
import {Route, BrowserRouter, Switch, Redirect } from "react-router-dom";

class LogInPage extends React.Component {

  handleSignIn = () => {
    if (auth.currentUser) {
      auth.signOut();
    } else {
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;

      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }

      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }

      auth.signInWithEmailAndPassword(email, password).catch( error => {
        let errorCode = error.code;
        let errorMessage = error.message;

        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
      });
    }
  }

  handleSignUp = () => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
      alert('Please enter an email address.');
      return;
    }
    if (password.length < 4) {
      alert('Please enter a password.');
      return;
    }

    auth.createUserWithEmailAndPassword(email, password).catch( error => {
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

  handlePasswordReset = () => {
    var email = document.getElementById('email').value;
    auth.sendPasswordResetEmail(email).then( () => {
      alert('Password Reset Email Sent!');
    }).catch( error => {
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode === 'auth/invalid-email') {
        alert(errorMessage);
      } else if (errorCode === 'auth/user-not-found') {
        alert(errorMessage);
      }
      console.log(error);
    });
  }

  componentDidMount () {
    this.addClickListeners();
  }

  addClickListeners = () => {
    document.getElementById('blitz-sign-in').addEventListener('click', this.handleSignIn, false);
    document.getElementById('blitz-sign-up').addEventListener('click', this.handleSignUp, false);
    document.getElementById('blitz-password-reset').addEventListener('click', this.handlePasswordReset, false);
  }

  render() {
    return (
      <div>
        {auth.currentUser && (
          <Redirect to="/" />
        )}
        <div>
          <h2>Blitz Email &amp; Password Authentication</h2>
        </div>
        <div>
          <p>Enter an email and password below and either sign in to an existing account or sign up</p>
          <input
            ref="_email"
            type="text"
            id="email"
            name="email"
            placeholder="Email"/>
          &nbsp;&nbsp;&nbsp;
          <input
            ref="_password"
            type="password"
            id="password"
            name="password"
            placeholder="Password"/>
          <br/><br/>
          <button id="blitz-sign-in" name="signin">Sign In</button>
          &nbsp;&nbsp;&nbsp;
          <button id="blitz-sign-up" name="signup">Sign Up</button>
          &nbsp;&nbsp;&nbsp;
          <button id="blitz-password-reset" name="verify-email">Send Password Reset Email</button>
        </div>
      </div>
    );
  }
}

export default LogInPage;
