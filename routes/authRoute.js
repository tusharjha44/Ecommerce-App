import express from "express";
import { registerController,loginController } from "../controllers/authController.js";

//router Object
const router = express.Router();

//Routing

//REGISTER || POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);
export default router;
