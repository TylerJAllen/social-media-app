import firebase from '../firebase.js';
import { db, auth, storageKey, isAuthenticated } from '../firebase.js';


export const addNewPostToDB = (post) => {
  let newPostKey =db.ref().child('posts').push().key;
  let updates = {};

  post.id = newPostKey;

  updates[`/posts/${newPostKey}`] = post;
  updates[`/users/${auth.currentUser.uid}/userPosts/${newPostKey}`] = post;

  db.ref().update(updates);
}

export const updateUserInDB = (fullname, username, location, bio) => {
  let userId = auth.currentUser.uid;
  console.log("test",fullname, auth.currentUser.uid);
  let updates = {};

  updates[`/users/${auth.currentUser.uid}/user/fullname`] = fullname;
  updates[`/users/${auth.currentUser.uid}/user/username`] = username;
  updates[`/users/${auth.currentUser.uid}/user/location`] = location;
  updates[`/users/${auth.currentUser.uid}/user/bio`] = bio;

  db.ref().update(updates);

}

export const addNewUserToDB = (user) => {
  let newUserId = auth.currentUser.uid;
  user.userId = newUserId;
  let updates = {};

  updates[`/users/${newUserId}/user`] = user;

  db.ref().update(updates);
}
