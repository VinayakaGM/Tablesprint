import express from "express";
import auth from "../middlewares/auth.js";
import upload from "../middlewares/upload.js";
import {
  createSubCategory,
  getSubCategories,
  getSubCategory,
  updateSubCategory,
  deleteSubCategory,
} from "../controllers/subcategoryControllers.js";

const router = express.Router();

// Create a new subcategory
router.post("/", auth, upload.single("image"), createSubCategory);

// Get all subcategories
router.get("/", auth, getSubCategories);

// Get a specific subcategory by ID
router.get("/:id", auth, getSubCategory);

// Update a subcategory
router.put("/:id", auth, upload.single("image"), updateSubCategory);

// Delete a subcategory
router.delete("/:id", auth, deleteSubCategory);

export default router;
