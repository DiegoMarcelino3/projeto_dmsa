const {Router} = require("express")
const RoutesController = require("../controllers/routesController.js")

const router = Router()

router.get("/products", RoutesController.getAllData)
router.get("/products/:id", RoutesController.getOneData)
router.post("/products", RoutesController.createData)
router.put("/products/:id", RoutesController.updateData)
router.delete("/products/:id", RoutesController.deleteData)

module.exports = router