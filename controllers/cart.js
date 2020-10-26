const { query } = require("express");
const User = require("../models/user")
const Cart = require("../models/cart")

const {auth} = require("../middleware/auth")


exports.postCart = (req, res) => {
  
    const cart = new Cart(req.body)
    cart.save((err, cart) => {
        if(err) {
            return res.status(400).json({
                err: "Data not saved in DB"
            })
        }
        res.json(cart)
    });
};


exports.getCart = async (req, res) => {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    const user = await User.findById(req.user.id);
    // res.json(user);
    
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("ecommerce");
      var query = {user_id:user._id }
      dbo.collection("cartproducts").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(query);
        res.send(result)
        
      });
    });
};