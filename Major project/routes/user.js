const express = require("express");
const router = express.Router({});
const User = require("../models/user.js");
const passport = require("passport");
const wrapAsync = require("../utils/wrapAsync.js");
const { saveRedirectUrl } = require("../middlewares.js");

const userController = require("../controllers/users.js");
const { render } = require("ejs");

router.get("/signup",userController.renderSignupForm);

router.post(
  "/signup",
  wrapAsync(userController.signupPage)
);

router.get("/login",userController.renderLoginForm);

router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  wrapAsync(userController.loginPage)
);

router.get("/logout",userController.logoutPage);

module.exports = router;
