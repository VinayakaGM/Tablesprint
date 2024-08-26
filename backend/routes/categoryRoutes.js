import express from "express";
import upload from "../middlewares/upload.js";
import auth from "../middlewares/auth.js";
import {
  createCategory,
  getCategories,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryControllers.js";

const router = express.Router();

// Display all categories
router.get("/", auth, getCategories);

// Add a new category
router.post("/", auth, upload.single("image"), createCategory);

// Edit a category
router.put("/:id", auth, upload.single("image"), updateCategory);

// Delete a category
router.delete("/:id", auth, deleteCategory);

export default router;
