import React from 'react';
import './styles.css';
import Post from '../../components/Post';
import PropTypes from "prop-types";

var masterPostList = [
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
];

function PostList(props){
  console.log(props.postList);
  return (
    <ol className="post-list">
      {masterPostList.map((post, index) =>
        <Post name={post.name}
          username={post.username}
          text={post.text}
          key={index}/>
      )}
      </ol>
  );
}

PostList.propTypes = {
  postList: PropTypes.array
};

export default PostList;
