const Firebase = require("firebase/app");
require("firebase/firestore");
require("firebase/auth");

const config = {
  apiKey: process.env.apiKey_palabra,
  authDomain: process.env.authDomain_palabra,
  databaseURL: process.env.databaseURL_palabra,
  projectId: `${process.env.projectId_palabra}`,
  storageBucket: process.env.storageBucket_palabra,
  messagingSenderId: process.env.messagingSenderId_palabra,
  appId: process.env.appId_palabra,
};

const ServiceAccount = {
  project_id: process.env.projectId_palabra,
  private_key: process.env.PRIVATE_KEY_PALABRA.replace(/\\n/g, "\n"),
  client_email: process.env.CLIENT_EMAIL_PALABRA,
  client_id: process.env.CLIENT_ID_PALABRA,
};

Firebase.initializeApp(config);

const firebaseAuth = Firebase;

const firestore = Firebase.firestore();

module.exports = {
  firestore,
  firebaseAuth,
  ServiceAccount,
};
