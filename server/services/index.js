const { firestore, ServiceAccount } = require("../../utils/firebase");
const admin = require("firebase-admin");

async function addtodb(req, res) {
  try {
    let isAvailable = false;
    let added = false;
    let word = req.query.word;
    let definition = req.query.definition;
    let topics = req.query.topics;
    let uid = null;
    let db = firestore.firestore;

    let auth_token = req.cookies["auth"];
    let team = req.cookies["team"];

    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(ServiceAccount),
        databaseURL: "https://jargon-de5f5.firebaseio.com",
      });
    }

    await admin
      .auth()
      .verifyIdToken(auth_token)
      .then(async function (decodedToken) {
        uid = decodedToken.uid;
      })
      .catch(function (error) {
        console.log(error);
      });

    await admin
      .firestore()
      .collection("words")
      .doc(word)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          isAvailable = true;
          res.send({ isAvailable });
        } else {
          if (isAvailable == false) {
            admin
              .firestore()
              .collection("words")
              .add({
                definition: definition,
                added_by: uid,
                term: word,
                topics: topics,
                team: team,
              })
              .then(function (docRef) {
                console.log("Document written with ID: ", docRef.id);
              })
              .catch(function (error) {
                console.error("Error adding document: ", error);
              });

            added = true;
            res.send({ added });
          }
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  } catch (e) {
    console.log(e);
  } finally {
  }
}

async function getwords(req, res) {
  const tempDoc = [];

  let auth_token = req.cookies["auth"];
  let team = req.cookies["team"];

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(ServiceAccount),
      databaseURL: "https://jargon-de5f5.firebaseio.com",
    });
  }

  await admin
    .auth()
    .verifyIdToken(auth_token)
    .then(async function (decodedToken) {
      uid = decodedToken.uid;
    })
    .catch(function (error) {
      console.log(error);
    });

  await admin
    .firestore()
    .collection("words")
    .where("team", "==", team)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        tempDoc.push({
          word: doc.data().term,
          definition: doc.data().definition,
        });
      });
    });

  res.send({ tempDoc });
}

async function getDefinition(req, res) {
  let auth_token = req.headers.auth;

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(ServiceAccount),
      databaseURL: "https://jargon-de5f5.firebaseio.com",
    });
  }

  await admin
    .auth()
    .verifyIdToken(auth_token)
    .then(async function (decodedToken) {
      uid = decodedToken.uid;
    })
    .catch(function (error) {
      console.log(error);
    });

  const tempDoc = [];

  let data = await admin
    .firestore()
    .collection("words")
    .where("term", "==", req.params.word);

  await data.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      tempDoc.push({
        definition: doc.data().definition,
        topics: doc.data().topics,
      });
    });
  });

  res.status(200).json(tempDoc);
}

async function getConsole(req, res) {
  let uid = null;

  let auth_token = req.headers.auth;

  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(ServiceAccount),
      databaseURL: "https://jargon-de5f5.firebaseio.com",
    });
  }

  await admin
    .auth()
    .verifyIdToken(auth_token)
    .then(async function (decodedToken) {
      uid = decodedToken.uid;
    })
    .catch(function (error) {
      console.log(error);
    });

  const data = [];

  let teams = await admin
    .firestore()
    .collection("teams")
    .where("added_by", "==", uid);

  await teams.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      data.push({ teams: doc.data() });
    });
  });

  res.status(200).json(data);
}

module.exports = {
  addtodb: addtodb,
  getwords: getwords,
  getDefinition: getDefinition,
  getConsole: getConsole,
};
