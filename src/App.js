import React, { Component } from 'react';
import './App.css';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Header from './components/Header';
import NavigationLinks from './components/NavigationLinks';
import PostList from './components/PostList';
import NewPostControl from './components/NewPostControl';
import UserProfile from './components/UserProfile/index.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      formModalIsShowing: false,
      masterPostList: [
      {
        name: "frank Apple",
        username: "FRANKtheTANK",
        text: "That catch was UNREAL!!!"
      },
      {
        name: "Susie Reign",
        username: "feeltheReign",
        text: "Adams just keeps playing better and better. Would be shocked if he isn't voted Defensive Rookie of the Year. SHOCKED I TELL YOU!"
      },
      {
        name: "Fake Name",
        username: "fakeeee",
        text: "iuhann u uens fasdjkfn iun euabes kba kba sbd kawebfeiubewiurakasjf b balesdbaweb besdf esdbf d db."
      },
      {
        name: "frank Apple",
        username: "FRANKtheTANK",
        text: "That catch was UNREAL!!!"
      },
      {
        name: "Susie Reign",
        username: "feeltheReign",
        text: "Adams just keeps playing better and better. Would be shocked if he isn't voted Defensive Rookie of the Year. SHOCKED I TELL YOU!"
      },
      {
        name: "Fake Name",
        username: "fakeeee",
        text: "iuhann u uens fasdjkfn iun euabes kba kba sbd kawebfeiubewiurakasjf b balesdbaweb besdf esdbf d db."
      },
      {
        name: "frank Apple",
        username: "FRANKtheTANK",
        text: "That catch was UNREAL!!!"
      },
      {
        name: "Susie Reign",
        username: "feeltheReign",
        text: "Adams just keeps playing better and better. Would be shocked if he isn't voted Defensive Rookie of the Year. SHOCKED I TELL YOU!"
      },
      {
        name: "Fake Name",
        username: "fakeeee",
        text: "iuhann u uens fasdjkfn iun euabes kba kba sbd kawebfeiubewiurakasjf b balesdbaweb besdf esdbf d db."
      }
    ]};
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

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="App-header">
            <Header
              showFormModal = {this.showFormModal}
            />
          </div>
          <div className="App-main">
            <NewPostControl
              formModalIsShowing = {this.state.formModalIsShowing}
              onNewPostCreation = {this.addNewPostToList}
              hideFormModal = {this.hideFormModal}
            />
            <Switch>
              <Route exact path = '/'
                render = {props => <PostList {...props} masterPostList = {this.state.masterPostList} />
                }
              />
              <Route path='/user-profile'
                render = {props => <UserProfile {...props} masterPostList = {this.state.masterPostList} />
                }
              />
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
