import express from "express";
import upload from "../middlewares/upload.js";
import auth from "../middlewares/auth.js";
import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productControllers.js";

const router = express.Router();

// Create a new product
router.post("/", auth, upload.single("image"), createProduct);

// Get all products
router.get("/", auth, getProducts);

// Get a specific product
router.get("/:id", auth, getProduct);

// Update a product
router.put("/:id", auth, upload.single("image"), updateProduct);

// Delete a product
router.delete("/:id", auth, deleteProduct);

export default router;
