import express from "express";
import {
  registerController,
  loginController,
  testController,
  ForgotPasswordControllor,
} from "../controllers/authController.js";
import middle from "../middlewares/authMiddleware.js";
// const {requireSignIn,isAdmin} = require("../middlewares/authMiddleware.js")
//router Object
const router = express.Router();

//Routing
//REGISTER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//foget password
router.post("/forgot-password", ForgotPasswordControllor);

//Test route
router.get("/test", middle.requireSignIn, middle.isAdmin, testController);

//protected route auth for user
router.get("/user-auth", middle.requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//protected route auth for admin
router.get("/admin-auth", middle.requireSignIn, middle.isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
