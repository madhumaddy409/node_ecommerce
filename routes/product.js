var express = require("express")
var router = express.Router()

const { postProduct, getProduct } = require("../controllers/product")


router.post("/product", postProduct)

router.get("/product", getProduct)

module.exports = router