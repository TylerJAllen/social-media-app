import Moment from "moment";

class Post {
  constructor(name, username, text) {
    this.name = name;
    this.username = username;
    this.text = text;
    this.timeOpened = new Moment();
  }
}

export default Post;
