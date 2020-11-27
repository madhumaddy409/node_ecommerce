const e = require("cors");
const { query } = require("express");
const category = require("../models/category");
const SubCategory = require("../models/subCategory")




exports.postSubCategory= async (req, res) => {

    const { subCategoryName } = req.body;
    console.log(subCategoryName)
    let subCategory = await SubCategory.findOne({
        subCategoryName
      });
      if (subCategory)
        return res.status(400).json({
          message: "Subcategory Exist"
        });
    else{

        const { categoryName } = req.body;
        console.log(categoryName)
        var query = { categoryName:categoryName }
        let Category= await category.findOne(
            query
        )
        console.log(Category)

        if(Category){
                const subCategory = new SubCategory(req.body)
                subCategory.save((err, cart) => {
                if(err) {
                    return res.status(400).json({
                        err: "Data not saved in DB"
                    })
                }
                res.json(subCategory)
        
        
            });

        }
        else{
            return res.status(400).json({
                message: "Category Not Exist"
              });

        }
    }
}


exports.getSubCategory = async (req, res) => {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb+srv://root:root@cluster0.ue8qu.mongodb.net/ecommerce?retryWrites=true&w=majority";
 
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("ecommerce");
      dbo.collection("subcategories").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(query);
        res.send(result)
        
      });
    });
};