import React from 'react';
import './styles.css';
import Post from '../../components/Post';

class MainList extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className="mainlist">
        <Post />
        <Post />
        <Post />
      </div>
    );
  }
}

export default MainList;
