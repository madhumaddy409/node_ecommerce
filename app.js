const express =  require("express")
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express();

const prodRoutes = require("./routes/product")


const userRoutes = require("./routes/user")

const cartRoutes = require("./routes/cart")



mongoose.connect('mongodb://localhost:27017/ecommerce', {useNewUrlParser: true})
.then(() => {
    console.log("DB CONNECTED")
})
.catch(() => {
    console.log("DB not connected")
});
//MiddleWares
app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

//Routes
app.use("/api", prodRoutes)
app.use("/api",userRoutes)
app.use("/api",cartRoutes)

const port = 1234;

app.listen(port, () => {
    return console.log("Server is up and running");
  });