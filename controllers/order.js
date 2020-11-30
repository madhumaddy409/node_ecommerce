const { query } = require("express");
const Order = require("../models/order")
const Cart = require("../models/cart")

exports.postOrder = async (req, res) => {
    const { product_id ,user_id ,quantity} = req.body;
    
    
    //deleting from the cart
    let cart = await Cart.findOneAndDelete({
        product_id,user_id
      });

     console.log(cart) 
    //adding to order table
    const order = new Order(req.body)
    order.save((err, oredr) => {
        if(err) {
            return res.status(400).json({
                err: "Data not saved in DB"
            })
        }
        res.json(order)
    });
};




exports.getOrder = (req, res) => {
    // res.send("Hello")
    var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://root:root@cluster0.ue8qu.mongodb.net/ecommerce?retryWrites=true&w=majority";
// var url = "mongodb://localhost:27017/";

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
