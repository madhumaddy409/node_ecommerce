const { query } = require("express");
const http = require('http');
const fs = require('fs');
const formidable = require('formidable');
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

exports.getUpload = (req, res) => {

    upload(req, res, function(err) {
                if (err) {
                    return res.end("Something went wrong!");
                }
                return res.end("File uploaded sucessfully!.");
        
            });
    
    };
    

// app.post("/api/Upload", function(req, res) {

//     upload(req, res, function(err) {
//         if (err) {
//             return res.end("Something went wrong!");
//         }
//         return res.end("File uploaded sucessfully!.");

//     });

//  });