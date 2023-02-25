const router = require("./routes.js")
const cors = require("cors")
const express = require("express")

module.exports = app => {
    app.use(cors(), express.json(), router)
}