const { query } = require("express");
const http = require('http');
const fs = require('fs');


exports.getUpload = (req, res) => {

        res.sendFile(__dirname + "./index.html");
    
    };
    

