var express = require("express")
var router = express.Router()

const { postProduct, getProduct ,getAllProduct, getByIdProduct} = require("../controllers/product")
const { route } = require("./user")


router.post("/product", postProduct)

// router.get("/product", getProduct)

router.get("/product",getAllProduct)
router.get("/product/:productId", getByIdProduct);

module.exports = router