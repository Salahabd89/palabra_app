const { firestore, ServiceAccount } = require("../../utils/firebase");
const admin = require("firebase-admin");

async function addteam(req, res) {
  try {
    let team = req.query;

    let allTeams = [];

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

    await admin
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

    await admin
      .firestore()
      .collection("users")
      .doc(uid)
      .update({
        team: admin.firestore.FieldValue.arrayUnion(team.team),
      });

    let teams = await admin
      .firestore()
      .collection("teams")
      .where("added_by", "==", uid); //user

    await teams.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        allTeams.push(doc.data().team_name);
      });
    });

    res.status(200).json(allTeams);
  } catch (e) {
    console.log(e);
  } finally {
  }
}

module.exports = {
  addteam: addteam,
};
