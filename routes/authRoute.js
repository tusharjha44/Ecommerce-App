import express from "express";
import {
  registerController,
  loginController,
  testController,
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

//Test route
router.get("/test", middle.requireSignIn,middle.isAdmin, testController);

export default router;
