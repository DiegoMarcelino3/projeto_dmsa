const app = require("./firebaseConfig.js")
const { getFirestore } = require("firebase-admin/firestore")

const db = getFirestore(app)

module.exports = db