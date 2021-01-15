const redis = require('redis')
const {promisify, isRegExp} = require('util')

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


//redis

// const Redis_port = Number(process.env.PORT || 6379);
// const Redis_port = "redis-13376.c80.us-east-1-2.ec2.cloud.redislabs.com:13376"

client    = redis.createClient({
  port      : 13376,               // replace with your port
  host      : 'redis-13376.c80.us-east-1-2.ec2.cloud.redislabs.com',        // replace with your hostanme or IP address
  password  : 'tHEWjYHhQhF6vFmVMJO1cnFxYDpxhA4n',    // replace with your password
});

const GET_ASYNC = promisify(client.get).bind(client)
const SET_ASYNC = promisify(client.set).bind(client)



exports.getAllProduct = async (req, res) =>  {
  try{
       const reply = await GET_ASYNC('products')
 
       if(reply){
         console.log('using cached data')
         res.send(JSON.parse(reply))
         return
       }
 
       const respone =  await Product.find({});
       const saveResult = await SET_ASYNC('products', JSON.stringify(respone),'EX', 35)
       
       console.log('new data cached',saveResult)
       // console.log(respone)
       res.send(respone)
  
 
  } catch(err){
    console.log(err);
    res.status(500)
  }
  
   
 
 
 }

 exports.getByIdProduct = function (req, res,next) {
  const {productId} = req.params
  const _id = productId

Product.findById(_id, function (err, product) { 
  if (err) {
    res.status(500).json({ error: { message: 'incorrect productid' } })
  } else {
    res.json(product);
  }
});
 }