const express =  require("express")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const http = require('http');
const path = require("path");


const app = express();


const prodRoutes = require("./routes/product")
const userRoutes = require("./routes/user")
const cartRoutes = require("./routes/cart")
const categoryRoutes = require("./routes/category")
const subCategoryRoutes = require("./routes/subCategory")
const orderRoutes = require("./routes/order")
const chatRoutes = require("./routes/chat")
const commentRoutes = require("./routes/comment")



const uploadRoutes = require("./routes/fileupload")


// mongodb+srv://root:<password>@cluster0.ue8qu.mongodb.net/<dbname>?retryWrites=true&w=majority

// mongoose.connect('mongodb://localhost:27017/ecommerce', {useNewUrlParser: true})

mongoose.connect('mongodb+srv://root:root@cluster0.ue8qu.mongodb.net/ecommerce?retryWrites=true&w=majority', {useNewUrlParser: true})

.then(() => {
    console.log("DB CONNECTED")
})
.catch(() => {
    console.log("DB not connected")
});

const swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');


      



//MiddleWares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//Routes
app.use("/api", prodRoutes)
app.use("/api",userRoutes)
app.use("/api",cartRoutes)
app.use("/api",uploadRoutes)
app.use(express.static('public'));
app.use("/api",categoryRoutes)
app.use("/api",subCategoryRoutes)
app.use("/api",orderRoutes)
app.use("/api",chatRoutes)
app.use("/api",commentRoutes)

//swagger API
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', prodRoutes);
app.use('/api/v1', categoryRoutes);
app.use('/api/v1', subCategoryRoutes);
app.use('/api/v1', cartRoutes);
app.use('/api/v1', userRoutes);
app.use('/api/v1',orderRoutes)




const port=Number(process.env.PORT || 3000);



app.listen(port, () => {
    return console.log("Server is up and running on 3000");
  });




//connecting html page

app.get("/", function(req, res) {

    res.sendFile(__dirname + "/public/home.html");

});
app.get("/category", function(req, res) {

    res.sendFile(__dirname + "/public/category.html");

});

app.get("/subcategory", function(req, res) {

    res.sendFile(__dirname + "/public/subcategory.html");

});



app.get("/login", function(req, res) {

    // res.sendFile(__dirname + "/public/index.html");
    res.sendFile(__dirname + "/routes/templates/index.html");

});

app.get("/api/chat", function(req, res) {

    // res.sendFile(__dirname + "/public/index.html");
    res.sendFile(__dirname + "/public/chat.html");

});
