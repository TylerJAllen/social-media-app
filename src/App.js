import React from "react";
import "./App.css";
import {Route, BrowserRouter, Switch } from "react-router-dom";
import { db, auth, storageKey, isAuthenticated } from "./firebase.js";
import { MatchWhenAuthorized } from "./models/routes.js";

import Header from "./components/Header";
import NavigationLinks from "./components/NavigationLinks";
import PostList from "./components/PostList";
import NewPostControl from "./components/NewPostControl";
import LogInPage from "./components/LogInPage";



class App extends React.Component {
  constructor(){
    super();
    this.state = {
      formModalIsShowing: false,
      user: null,
      userId: null
    }
  }

  componentDidMount = () => {
    this.removeListener = auth.onAuthStateChanged((user) => {
      if (user) {
        window.localStorage.setItem(storageKey, user.uid);
        this.setState({ userId: user.uid, user });
      } else {
        window.localStorage.removeItem(storageKey);
        this.setState({ userId: null, user: null });
      }
    });
  }

  componentWillUnmount = () => {
    this.removeListener();
  }

  //show modal for new post
  showFormModal = () => {
    this.setState({ formModalIsShowing: true });
  }

  //hide modal for new post
  hideFormModal = () => {
    this.setState({ formModalIsShowing: false });
  }

  //remove after firebase posts retrieval is established
  addNewPostToList = (newPost) => {
   let newMasterPostList = this.state.masterPostList.slice();
   newMasterPostList.unshift(newPost);
   this.setState({masterPostList: newMasterPostList});
  }


  render = () => {
    console.log("state.user: ", this.state.user);
    console.log("state.userId: ", this.state.userId);
    return (
      <BrowserRouter>
        <div className="App">
        <Header showFormModal={this.showFormModal} />
          <div className="App-main">
            <NewPostControl
            formModalIsShowing={this.state.formModalIsShowing}
            onNewPostCreation={this.addNewPostToList}
            hideFormModal={this.hideFormModal}
            signedInUser={this.state.user} />
            <Switch>

              {/*<Route exact path="/" render={() => (
                loggedIn ? (
                  <Redirect to="/dashboard"/>
                ) : (
                  <PublicHomePage/>
                )
              )}/>*/}

              <MatchWhenAuthorized exact path="/" component={PostList} />

              <Route exact path='/login' component={LogInPage} />



            </Switch>
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
