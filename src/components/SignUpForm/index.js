import React from 'react';
import './styles.css';
import User from '../../models/User.js';
import firebase from '../../firebase.js';

class SignUpForm extends React.Component {


  handleNewUserFormSubmission = (event) => {
    event.preventDefault();
    const { _fullName, _username, _password } = this.refs;
    const usersRef = firebase.database().ref('users');
    var newUser = new User(_fullName.value, _username.value, _password.value);

    usersRef.push(newUser);

    console.log(newUser);
  }

  render(){
    return (
      <form onSubmit={this.handleNewUserFormSubmission}>
        <div className="input-wrapper">
          <input
            ref="_fullName"
            type="text"
            id="fullName"
            placeholder="Full Name" />
        </div>
        <div className="input-wrapper">
          <input
            ref="_username"
            type="text"
            id="username"
            placeholder="Username" />
        </div>
        <div className="input-wrapper">
          <input
            ref="_password"
            type="password"
            id="password"
            placeholder="Password" />
        </div>
        <button type="submit">Sign up</button>
      </form>
    );
  }
}

export default SignUpForm;
