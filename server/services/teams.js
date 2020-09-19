const { firestore, ServiceAccount } = require("../../utils/firebase");
const admin = require("firebase-admin");

async function addteam(req, res) {
  try {
    let team = req.query;

    let uid = null;

    let auth_token = req.cookies["auth"];

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

    admin
      .firestore()
      .collection("teams")
      .add({
        added_by: uid,
        department: team.dept,
        industry: team.ind,
        organisation: team.org,
        sub_industry: team.subind,
        team_name: team.team,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });

    admin
      .firestore()
      .collection("users")
      .doc(uid)
      .update({
        team: admin.firestore.FieldValue.arrayUnion(team.team),
      });
  } catch (e) {
    console.log(e);
  } finally {
  }
}

module.exports = {
  addteam: addteam,
};
