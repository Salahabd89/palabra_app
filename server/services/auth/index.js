const {
  firestore,
  firebaseAuth,
  ServiceAccount,
} = require("../../../utils/firebase");
const admin = require("firebase-admin");

async function signin(req, res) {
  try {
    const auth = firebaseAuth.auth();

    const email = req.query.email;
    const password = req.query.password;
    let signin = "";
    let token = "";

    await auth
      .signInWithEmailAndPassword(email, password)
      .then(async function (user) {
        signin = user;
        await auth.currentUser.getIdToken(true).then(function (idToken) {
          token = idToken;
        });
      })
      .catch((error) => {
        console.error("Error signing in with password and email", error);
      });

    if (!admin.apps.length) {
      admin.initializeApp({
        credential: admin.credential.cert(ServiceAccount),
        databaseURL: "https://jargon-de5f5.firebaseio.com",
      });
    }

    const userInfo = await getUserDocument(signin.user.uid);

    res.cookie("refresh_token", signin.user.refreshToken, {
      maxAge: 30 * 24 * 3600 * 1000,
    });

    res.cookie("username", userInfo.displayName, {
      maxAge: 30 * 24 * 3600 * 1000,
    });

    res.cookie("auth", token, {
      maxAge: 30 * 24 * 3600 * 1000,
    });
    console.log(userInfo);
    res.send({ userInfo: userInfo });
  } catch (e) {
    console.log(e);
  } finally {
  }
}

async function signup(req, res) {
  try {
    const auth = firebaseAuth.auth();

    const email = req.query.email;
    const password = req.query.password;
    const displayName = req.query.displayName;
    const team = [];

    team.push("Self");

    const { user } = await auth.createUserWithEmailAndPassword(email, password);

    res.send(generateUserDocument(user, { displayName, team }));
  } catch (e) {
    console.log(e);
  } finally {
  }
}

const generateUserDocument = async (user, additionalData) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { email, displayName } = user;
    try {
      await userRef.set({
        displayName,
        email,
        ...additionalData,
      });
    } catch (error) {
      console.error("Error creating user document", error);
    }
  }

  return getUserDocument(user.uid);
};

const getUser = async (req, res) => {
  let auth_token = req.cookies["auth"];

  let uid = null;

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

  let userinfo = await getUserDocument(uid);
  res.send({ userinfo: userinfo });
};

const getUserDocument = async (uid) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(ServiceAccount),
      databaseURL: "https://jargon-de5f5.firebaseio.com",
    });
  }
  if (!uid) return null;
  try {
    const userDocument = await admin.firestore().doc(`users/${uid}`).get();

    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error("Error fetching user", error);
  }
};

module.exports = {
  signup: signup,
  signin: signin,
  getUser: getUser,
};
