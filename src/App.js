import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import NavigationLinks from './components/NavigationLinks';
import PostList from './components/PostList';
import NewPostControl from './components/NewPostControl';

class App extends Component {
  constructor(){
    super();
    this.state = {
      formModalIsShowing: false,
      masterPostList: [
      {
        name: "frank Apple",
        username: "@FRANKtheTANK",
        text: "That catch was UNREAL!!!"
      },
      {
        name: "Susie Reign",
        username: "@feeltheReign",
        text: "Adams just keeps playing better and better. Would be shocked if he isn't voted Defensive Rookie of the Year. SHOCKED I TELL YOU!"
      },
      {
        name: "Fake Name",
        username: "@fakeeee",
        text: "iuhann u uens fasdjkfn iun euabes kba kba sbd kawebfeiubewiurakasjf b balesdbaweb besdf esdbf d db."
      },
      {
        name: "frank Apple",
        username: "@FRANKtheTANK",
        text: "That catch was UNREAL!!!"
      },
      {
        name: "Susie Reign",
        username: "@feeltheReign",
        text: "Adams just keeps playing better and better. Would be shocked if he isn't voted Defensive Rookie of the Year. SHOCKED I TELL YOU!"
      },
      {
        name: "Fake Name",
        username: "@fakeeee",
        text: "iuhann u uens fasdjkfn iun euabes kba kba sbd kawebfeiubewiurakasjf b balesdbaweb besdf esdbf d db."
      },
      {
        name: "frank Apple",
        username: "@FRANKtheTANK",
        text: "That catch was UNREAL!!!"
      },
      {
        name: "Susie Reign",
        username: "@feeltheReign",
        text: "Adams just keeps playing better and better. Would be shocked if he isn't voted Defensive Rookie of the Year. SHOCKED I TELL YOU!"
      },
      {
        name: "Fake Name",
        username: "@fakeeee",
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
          <PostList
            masterPostList = {this.state.masterPostList}
          />
        </div>
        <div className="App-footer">
          <NavigationLinks />
        </div>
      </div>
    );
  }
}

export default App;
