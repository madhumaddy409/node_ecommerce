var express = require("express")
var router = express.Router()
var http = require('http');
var fs = require('fs');

const { postUpload, getUpload } = require("../controllers/upload")


router.post("/upload", postUpload)

// router.get("/upload", getUpload)

module.exports = router

