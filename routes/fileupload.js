var express = require("express")
var router = express.Router()
var http = require('http');
var fs = require('fs');
const multer = require('multer');


var Storage = multer.diskStorage({
    destination: function(req, file, callback) {
             callback(null, "./Images");
         },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
        }
    })

var upload = multer({
    storage: Storage
}).array("imgUploader", 3);



router.post("/Upload", function(req, res) {

    upload(req, res, function(err) {
        if (err) {
            return res.end("Something went wrong!");
        }
        return res.end("File uploaded sucessfully!.");

    });

 });

router.get("/upload", function(req, res) {

    res.sendFile(__dirname + "/templates/upload.html");

});




module.exports = router

