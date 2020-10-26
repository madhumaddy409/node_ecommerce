const { query } = require("express");
const Product = require("../models/products")

exports.postProduct = (req, res) => {
  
    const product = new Product(req.body)
    product.save((err, product) => {
        if(err) {
            return res.status(400).json({
                err: "Data not saved in DB"
            })
        }
        res.json(product)
    });
};




exports.getProduct = (req, res) => {
    // res.send("Hello")
    var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("ecommerce");
//   var query = {name:"samsung" }
  dbo.collection("products").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    res.send(result)
    
  });
});
    
}
