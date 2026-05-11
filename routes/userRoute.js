import express from "express";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

/**
 * ================= USER CRUD ROUTES =================
 */

// Create user (admin adds student/teacher/accountant)
router.post("/", createUser);

// Get all users
router.get("/", getUsers);

// Get single user
router.get("/:id", getUserById);

// Update user
router.put("/:id", updateUser);

// Delete user
router.delete("/:id", deleteUser);

export default router;