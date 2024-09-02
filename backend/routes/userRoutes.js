import express from "express";
import { signup, login, logout } from "../controllers/userControllers.js";

const router = express.Router();

// Signup route
router.post("/signup", signup);

// Login route
router.post("/login", login);

// Logout route
router.get("/logout", logout);

export default router;
