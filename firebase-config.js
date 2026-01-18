// Only keep this locally, do NOT push to GitHub
const firebaseConfig = {
  apiKey: "AIzaSyAthQbGd6MG40bzytcRi8sveLYb4jT8xME",
  authDomain: "knec-48ac1.firebaseapp.com",
  projectId: "knec-48ac1",
  storageBucket: "knec-48ac1.appspot.com",
  messagingSenderId: "884023224058",
  appId: "1:884023224058:web:2c93e9ac4cb129f0b1cb43"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();