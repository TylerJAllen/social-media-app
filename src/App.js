import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import PostList from './components/PostList';
import Post from './components/Post';

class App extends Component {
  constructor(){
    super();
    this.state={ newPost: null };
  }

  addPost = () => {
    const newPost = {
      name: "New Post",
      username: "@newpost",
      text: "this new post was added by clicking a button!!"
    }
    this.setState({ newPost });
  }

  addNewPostToList(newPost){
   let newMasterPostList = this.state.masterPostList.slice();
   newMasterPostList.push(newPost);
   console.log('setState');
   this.setState({masterPostList: newMasterPostList});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header addNewPost={this.addPost} />
        </div>
        <div className="App-main">
          <PostList
            postList = {this.state.masterPostList}
          />
        </div>
      </div>
    );
  }
}

export default App;
