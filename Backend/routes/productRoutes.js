import express from "express";
import {
  createProductController,
  deleteProductController,
  fillterProductController,
  getProductController,
  getSingleProductController,
  relatedProductController,
  productPhotoController,
  productCountController,
  searchProductController,
  updateProductController,
  productPerPageController,
  productCategoryController,
} from "../controllers/productController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";
const router = express.Router();

//routes

//create product
router.post(
  "/create-product",
  authMiddleware.requireSignIn,
  authMiddleware.isAdmin,
  formidable(),
  createProductController
);

//update product
router.put(
  "/update-product/:pid",
  authMiddleware.requireSignIn,
  authMiddleware.isAdmin,
  formidable(),
  updateProductController
);

//get Products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);

//filter products
router.post("/product-filters", fillterProductController);

//product count
router.get("/product-count", productCountController);

router.get("/product-list/:page", productPerPageController);

//search
router.get("/search/:keyword", searchProductController);

//related product
router.get("/related-product/:pid/:cid", relatedProductController);

//category wise product
router.get("/product-category/:slug", productCategoryController);

export default router;
