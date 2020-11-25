const express =  require("express")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const http = require('http');
const path = require("path");
const fs = require('fs');
const formidable = require('formidable');
const multer = require('multer');

const app = express();


const prodRoutes = require("./routes/product")
const userRoutes = require("./routes/user")
const cartRoutes = require("./routes/cart")

// const uploadRoutes = require("./routes/fileupload")

// mongodb+srv://root:<password>@cluster0.ue8qu.mongodb.net/<dbname>?retryWrites=true&w=majority

// mongoose.connect('mongodb://localhost:27017/ecommerce', {useNewUrlParser: true})

mongoose.connect('mongodb+srv://root:root@cluster0.ue8qu.mongodb.net/ecommerce?retryWrites=true&w=majority', {useNewUrlParser: true})

.then(() => {
    console.log("DB CONNECTED")
})
.catch(() => {
    console.log("DB not connected")
});

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

//MiddleWares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//Routes
app.use("/api", prodRoutes)
app.use("/api",userRoutes)
app.use("/api",cartRoutes)
// app.use("/api",uploadRoutes)

const port = 1234;

// const port1 = 8080;
app.listen(port, () => {
    return console.log("Server is up and running on 1234");
  });




//contecting html page
app.get("/", function(req, res) {

    res.sendFile(__dirname + "/index.html");

});

app.post("/api/Upload", function(req, res) {

    upload(req, res, function(err) {
        if (err) {
            return res.end("Something went wrong!");
        }
        return res.end("File uploaded sucessfully!.");

    });

 });