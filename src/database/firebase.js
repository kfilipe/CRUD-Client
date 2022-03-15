// import { initializeApp } from 'firebase/app';
// import { getDatabase } from "firebase/database";



// const firebaseConfig = {
//     apiKey: "AIzaSyAMiIzFmiOLwQF1Qoq_NuDYWeaNQWeWcsc",
//     authDomain: "rascunho-js.firebaseapp.com",
//     projectId: "rascunho-js",
//     storageBucket: "rascunho-js.appspot.com",
//     messagingSenderId: "327016101286",
//     appId: "1:327016101286:web:9e81e3c04b1c5ebb9ccb67"
// };

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app);
// const fireDB = database;

// export default fireDB

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAMiIzFmiOLwQF1Qoq_NuDYWeaNQWeWcsc",
    authDomain: "rascunho-js.firebaseapp.com",
    projectId: "rascunho-js",
    storageBucket: "rascunho-js.appspot.com",
    messagingSenderId: "327016101286",
    appId: "1:327016101286:web:9e81e3c04b1c5ebb9ccb67"
};

let fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref()