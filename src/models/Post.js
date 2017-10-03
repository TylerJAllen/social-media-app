import Moment from "moment";

class Post {
  constructor(text, fullname, username, location, description) {
    this.created_at = new Moment()._d;
    this.text = text;
    this.user = {
      fullname: fullname,
      username: username,
      location: location,
      description: description,
    };
    this.likes = 0;
    this.dislikes = 0;
    this.repost_count = 0;
    this.liked = false;
    this.disliked = false;
    this.reposted = false;
  }
}

export default Post;
