var express = require("express")
var router = express.Router()

const { postProduct, getProduct ,getAllProduct} = require("../controllers/product")
const { route } = require("./user")


router.post("/product", postProduct)

// router.get("/product", getProduct)

router.get("/product",getAllProduct)

module.exports = router