import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import MainList from './components/MainList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
        </div>
        <div className="App-main">
          <MainList />
        </div>
      </div>
    );
  }
}

export default App;
