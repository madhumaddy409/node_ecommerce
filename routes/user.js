var express = require("express")
const limitter = require('express-rate-limit')
var router = express.Router()


const { check, validationResult} = require("express-validator");

const { postSignup ,postLogin ,usersDet  } = require("../controllers/user")

const {auth} = require("../middleware/auth")

const User = require("../models/user");


const registerLimitter = limitter({
  windowMs: 5000,
  max: 2,
  message: {
    code:429,
    msg:'To ManY Request'
  }

})


//signup

router.post(
    "/signup",
    registerLimitter,
    [
        check("username", "Please Enter a Valid Username")
        .not()
        .isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({
            min: 6
        })
    ],
    postSignup
);


//signup

router.post(
    "/users",
    usersDet
);


//login


router.post(
    "/login",
    [
      check("email", "Please enter a valid email").isEmail(),
      check("password", "Please enter a valid password").isLength({
        min: 6
      })
    ],
    postLogin
  );
  

  router.get("/me", auth, async (req, res) => {
    try {
      // request.user is getting fetched from Middleware after token authentication
      const user = await User.findById(req.user.id);
      res.json(user);
    } catch (e) {
      res.send({ message: "Error in Fetching user" });
    }
  });  

  router.get("/profile", function(req, res) {

    res.sendFile(__dirname + "/templates/profile.html");

});

router.get("/placeOrder", function(req, res) {

  res.sendFile(__dirname + "/templates/order.html");

});


router.get("/trackOrder", function(req, res) {

  res.sendFile(__dirname + "/templates/trackOrder.html");

});



module.exports = router;