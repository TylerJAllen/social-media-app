import Moment from "moment";

class Post {
  constructor(text, user) {
    this.created_at = new Moment()._d;
    this.text = text;
    this.id = 0;
    this.user = user;
    this.likes = 0;
    this.dislikes = 0;
    this.repost_count = 0;
    this.liked = false;
    this.disliked = false;
    this.reposted = false;
  }
}

export default Post;
