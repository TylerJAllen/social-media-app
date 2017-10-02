import React from 'react';
import './styles.css';

class LogInForm extends React.Component {
  

  handleLogInFormSubmission = (event) => {
    event.preventDefault();
    const { _username, _password } = this.refs;
    console.log(_username.value, _password.value);
  }

  render(){
    return (
      <form onSubmit={this.handleLogInFormSubmission}>
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

export default LogInForm;
