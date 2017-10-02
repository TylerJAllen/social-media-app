import React from 'react';
import './styles.css';
import SignUpForm from '../SignUpForm';
import LogInForm from '../LogInForm';

class SignUpLogIn extends React.Component {
  constructor(props){
    super(props);
    this.state = { signUpIsClicked: false };
  }

  signUpIsClicked = () => {
    this.setState({ signUpIsClicked : true });
  }

  logInIsClicked = () => {
    this.setState({ signUpIsClicked : false });
  }

  displayForm = (input) => {
    if(input){
      return (
        <SignUpForm />
      );
    } else{
      return (
        <LogInForm logIn={this.props.logIn} />
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
