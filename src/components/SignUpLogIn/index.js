import React from 'react';
import './styles.css';
import SignUpForm from '../SignUpForm';
import LogInForm from '../LogInForm';

class SignUpLogIn extends React.Component {
  constructor(){
    super();
    this.state = { signUpIsClicked: false };
  }

  signUpIsClicked = () => {
    this.setState({ signUpIsClicked : true });
  }

  logInIsClicked = () => {
    this.setState({ signUpIsClicked : false });
  }

  displayForm = (input) => {
    if(input === true){
      return (
        <SignUpForm />
      );
    } else if(input === false){
      return (
        <LogInForm />
      );
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.signUpIsClicked}>Sign up</button>
        <button onClick={this.logInIsClicked}>Log in</button>
        <div>{this.displayForm(this.state.signUpIsClicked)}</div>
      </div>
    );
  }
}

export default SignUpLogIn;
