import Moment from "moment";

class User {
  constructor(fullname, username, password) {
    this.fullname = fullname;
    this.username = username;
    this.password = password;
    this.id = 0;
    this.location = false;
    this.description = false;
    this.team = false;
    this.avatar = false;
    this.hero = false;
    this.userPosts = [0];
    this.likes = [0];
    this.followers = [0];
    this.following = [0];
    this.messages = [0];

    this.accountCreated = new Moment()._d;
  }
}

export default User;
