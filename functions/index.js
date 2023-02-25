const functions = require("firebase-functions")
const express = require("express")
const routes = require("./src/routes")

const app = express()

routes(app)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server up and running in url: http://localhost:${port}`)
})

exports.api = functions.https.onRequest(app)