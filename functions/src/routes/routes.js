const {Router} = require("express")
const RoutesController = require("../controllers/routesController.js")

const router = Router()

router.get("/iten", RoutesController.getAllData)
router.get("/iten/:id", RoutesController.getOneData)
router.post("/iten", RoutesController.createData)
router.put("/iten/:id", RoutesController.updateData)
router.delete("/iten", RoutesController.deleteData)

module.exports = router