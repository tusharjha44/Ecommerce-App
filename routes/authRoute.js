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

//protected route auth
router.get("/user-auth", middle.requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
