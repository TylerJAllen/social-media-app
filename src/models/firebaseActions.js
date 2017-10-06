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


export const addNewUserToDB = (user) => {
  let newUserId = auth.currentUser.uid;
  user.userId = newUserId;
  let updates = {};

  updates[`/users/${newUserId}/user`] = user;

  db.ref().update(updates);
}


// export const getUserByKey = () => {
//   let userId = auth.currentUser.uid;
//
//   db.ref(`/users/${userId}`).once('value').then( snapshot => {
//     var user = snapshot.val();
//   });
// }
