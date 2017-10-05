import firebase from '../firebase.js';
import { db, auth, storageKey, isAuthenticated } from '../firebase.js';


export const setKeyAsUserId = (key) => {
  db.ref(`users/${key}`).update({
    id: key
  });
}

export const pushNewPostToDB = (key, post) => {
  return db.ref(`users/${key}/userPosts`).push(post);
}

export const setKeyAsPostId = (userKey, postKey) => {
  db.ref(`users/${userKey}/userPosts/${postKey}`).update({
    id: postKey
  });
}

//need to get this working
export const getUserByKey = (userKey) => {
  db.ref('users').equalTo(`${userKey}`).once('value').on('value', (snapshot) => {
    snapshot.forEach(userSnapshot => {
      console.log(userSnapshot.val());
    })
  })
}
