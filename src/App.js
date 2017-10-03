import React from 'react';
import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Header from './components/Header';
import NavigationLinks from './components/NavigationLinks';
import PostList from './components/PostList';
import NewPostControl from './components/NewPostControl';
import UserProfile from './components/UserProfile/index.js';
import PrivateMessage from './components/PrivateMessage';
import SignUpLogIn from './components/SignUpLogIn';

import firebase from './firebase.js';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      formModalIsShowing: false,
      user: null,
      masterPostList: [
      {
        fullname: "frank Apple",
        username: "FRANKtheTANK",
        text: "That catch was UNREAL!!!"
      },
      {
        fullname: "Susie Reign",
        username: "feeltheReign",
        text: "Adams just keeps playing better and better. Would be shocked if he isn't voted Defensive Rookie of the Year. SHOCKED I TELL YOU!"
      },
      {
        fullname: "Fake Name",
        username: "fakeeee",
        text: "iuhann u uens fasdjkfn iun euabes kba kba sbd kawebfeiubewiurakasjf b balesdbaweb besdf esdbf d db."
      },
      {
        fullname: "frank Apple",
        username: "FRANKtheTANK",
        text: "That catch was UNREAL!!!"
      },
      {
        fullname: "Susie Reign",
        username: "feeltheReign",
        text: "Adams just keeps playing better and better. Would be shocked if he isn't voted Defensive Rookie of the Year. SHOCKED I TELL YOU!"
      },
      {
        fullname: "Fake Name",
        username: "fakeeee",
        text: "iuhann u uens fasdjkfn iun euabes kba kba sbd kawebfeiubewiurakasjf b balesdbaweb besdf esdbf d db."
      },
      {
        fullname: "frank Apple",
        username: "FRANKtheTANK",
        text: "That catch was UNREAL!!!"
      },
      {
        fullname: "Susie Reign",
        username: "feeltheReign",
        text: "Adams just keeps playing better and better. Would be shocked if he isn't voted Defensive Rookie of the Year. SHOCKED I TELL YOU!"
      },
      {
        fullname: "Fake Name",
        username: "fakeeee",
        text: "iuhann u uens fasdjkfn iun euabes kba kba sbd kawebfeiubewiurakasjf b balesdbaweb besdf esdbf d db."
      }
    ]};
  }

  componentDidMount() {
  }

  showFormModal = () => {
    this.setState({ formModalIsShowing: true });
  }

  hideFormModal = () => {
    this.setState({ formModalIsShowing: false });
  }

  addNewPostToList = (newPost) => {
   let newMasterPostList = this.state.masterPostList.slice();
   newMasterPostList.unshift(newPost);
   this.setState({masterPostList: newMasterPostList});
  }

  logOut = () => {
    this.setState({user : null});
  }

  logInAuthentication = (username, password) => {
    const usersRef = firebase.database().ref('users');
    let userLoggedIn;

    usersRef.on('value', (snapshot) => {
      snapshot.forEach(userSnapshot => {
        let usernameSnapshot = userSnapshot.val().username;
        let passwordSnapshot = userSnapshot.val().password;
        if(username === usernameSnapshot && password === passwordSnapshot){
          userLoggedIn = userSnapshot.val();
        }
      })
    });

    if(userLoggedIn){
      this.setState({ user : userLoggedIn });
      console.log("YOU ARE LOGGED IN");
    } else{
      alert("Incorrect username and/or password. Please try again.")
      console.log("YOU ARE NOT LOGGED IN");
    }
  }

  render() {
    console.log(this.state.user);
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <Header
              showFormModal={this.showFormModal}
              logOut={this.logOut}
              signedInUser={this.state.user} />
          </div>
          <div className="App-main">
            <NewPostControl
              formModalIsShowing={this.state.formModalIsShowing}
              onNewPostCreation={this.addNewPostToList}
              hideFormModal={this.hideFormModal}
              signedInUser={this.state.user} />
              {this.state.user ?
                <Switch>
                  <Route exact path='/'
                  render={props => <PostList {...props} masterPostList={this.state.masterPostList} /> } />
                  <Route path='/user-profile'
                    render={props => <UserProfile {...props} masterPostList={this.state.masterPostList} /> } />
                  <Route path='/messages' component={PrivateMessage} />
                </Switch>
                :
                <Route path='/' render={props => <SignUpLogIn {...props} logIn={this.logInAuthentication} /> } />
              }
          </div>
          <div className="App-footer">
            <NavigationLinks />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
