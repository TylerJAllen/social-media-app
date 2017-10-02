import Moment from "moment";

class Post {
  constructor(name, username, text) {
    this.created_at = new Moment()._d;
    this.id_str ="";
    this.text = text;
    this.user = {
      id: null,
      name: "",
      username: "",
      location: "",
      description: "",
    }
    this.likes = 0;
    this.dislikes = 0;
    this.repost_count = 0;
    this.liked = false;
    this.disliked = false;
    this.reposted = false;
  }
}

export default Post;
