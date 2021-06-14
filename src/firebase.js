import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD5HA8mDYBibufzh0vZvpn7jamPoAer5RU",
    authDomain: "piw-firebase.firebaseapp.com",
    projectId: "piw-firebase",
    storageBucket: "piw-firebase.appspot.com",
    messagingSenderId: "365632705471",
    appId: "1:365632705471:web:b8e604d421bde982e9c70a",
    measurementId: "G-X9RTEQB4DJ"
  };

  if (!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  } else {
      firebase.app();
  }

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();


export const addPost = async(user, postData) => {
    firestore.collection("posts").add({
        owner: user.uid,
        ownerName: user.displayName,
        dateCreated: firebase.firestore.FieldValue.serverTimestamp(),
        text: postData
    })
}

export const getAllPosts = () => {
    return firestore.collection("posts").get();
}