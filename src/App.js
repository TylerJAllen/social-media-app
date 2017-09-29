import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import PostList from './components/PostList';
import NewPostControl from './components/NewPostControl';

class App extends Component {
  constructor(){
    super();
    this.state = { masterPostList: [
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

  addPost = () => {
    const newPost = {
      name: "New Post",
      username: "@newpost",
      text: "this new post was added by clicking a button!!"
    }
    this.setState({ newPost });
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
          <Header addNewPost={this.addPost} />
        </div>
        <div className="App-main">
          <NewPostControl
            onNewPostCreation = {this.addNewPostToList}
          />
          <PostList
            postList = {this.state.masterPostList}
          />
        </div>
      </div>
    );
  }
}

export default App;
