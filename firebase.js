import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBqq2GdQSpormHjnmwvCw2HnSE5ZJWUqJ8",
    authDomain: "tupaate-4f7f1.firebaseapp.com",
    projectId: "tupaate-4f7f1",
    storageBucket: "tupaate-4f7f1.appspot.com",
    messagingSenderId: "147124852670",
    appId: "1:147124852670:web:b7e59296a5b7ffd32bcbef",
    measurementId: "G-SH2Q68GH46"
  };

  let app;
  if(firebase.default.apps.length ===0){
     app =  firebase.default.initializeApp(firebaseConfig)
  }else{
      app = firebase.default.app();
  }
  const db = app.firestore();
  const auth = app.auth();
  const storage = app.storage();
  
  
  export {db, auth,storage};