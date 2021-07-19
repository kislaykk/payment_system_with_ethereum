const firebase = require('firebase');


const firebaseConfig = {
    apiKey: "AIzaSyBJT4ulVwtaDAZ3bBV_H7uguiDOSzlM5ug",
    authDomain: "bus-system2.firebaseapp.com",
    projectId: "bus-system2",
    storageBucket: "bus-system2.appspot.com",
    messagingSenderId: "325797811159",
    appId: "1:325797811159:web:11ce19728f1aab8f8ab192"
  };


firebase.default.initializeApp(firebaseConfig);

module.exports={firebase:firebase};