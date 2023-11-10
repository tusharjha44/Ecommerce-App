import express from "express";
import {
  singleCategoryController,
  CategoryController,
  createCategoryController,
  deleteCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";
import middle from "../middlewares/authMiddleware.js";

const router = express.Router();

//routes

//crate category
router.post(
  "/create-category",
  middle.requireSignIn,
  middle.isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  middle.requireSignIn,
  middle.isAdmin,
  updateCategoryController
);

//get all category
router.get("/get-category", CategoryController);

//get single Catgeory
router.get("/single-category/:slug", singleCategoryController);

//router
router.delete(
  "/delete-category/:id",
  middle.requireSignIn,
  middle.isAdmin,
  deleteCategoryController
);

export default router;
