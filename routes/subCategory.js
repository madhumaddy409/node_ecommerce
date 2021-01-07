var express = require("express")
var router = express.Router()



const { postSubCategory ,getSubCategory ,getAllSubCategories } = require("../controllers/subCategory")


router.post("/subCategory", postSubCategory)

router.get("/subCategory", getSubCategory)




module.exports = router