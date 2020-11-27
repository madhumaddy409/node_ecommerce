var express = require("express")
var router = express.Router()



const { postSubCategory ,getSubCategory } = require("../controllers/subCategory")


router.post("/subCategory", postSubCategory)

router.get("/subCategory", getSubCategory)




module.exports = router