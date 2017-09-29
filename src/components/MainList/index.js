import React from 'react';
import './styles.css';
import Post from '../../components/Post';

const fakeTweet1 = {
  name: "frank Apple",
  username: "@FRANKtheTANK",
  text: "Can't believe what I just saw!!! That catch was UNREAL!!!"
}
const fakeTweet2 = {
  name: "Susie Reign",
  username: "@feeltheReign",
  text: "Adams just keeps playing better and better. Would be shocked if he isn't voted DROY. SHOCKED I TELL YOU!"
}
const fakeTweet3 = {
  name: "Fake Name",
  username: "@fakeeee",
  text: "iuhann u uens fasdjkfn iun euabes kba kba sbd kawebfeiubewiurakasjf b balesdbaweb besdf esdbf d db."
}

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
