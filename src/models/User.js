import Moment from "moment";

class User {
  constructor(fullname, username, location, bio) {
    this.avatar = false;
    this.bio = bio;
    this.fullname = fullname;
    this.hero = false;
    this.location = location;
    this.team = false;
    this.userId = 0;
    this.username = username;
    this.accountCreated = (new Date());
  }
}

export default User;
