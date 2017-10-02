import Moment from "moment";

class User {
  constructor(fullname, username, password) {
    this.fullname = fullname;
    this.username = username;
    this.password = password;
    this.location = '';
    this.description = '';
    this.team = '';
    this.avatar = '';
    this.hero = '';
    this.posts = [];
    this.likes = [];
    this.followers = [];
    this.following = [];
    this.messages = [];

    this.accountCreated = new Moment()._d;
  }
}

export default User;
