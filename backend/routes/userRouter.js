import express from "express";
import {
  registerUser,
  loginUser,
  getUserProfile,
  updateUserProfile,
  changeUserPassword,
} from "../controllers/userController.js";
import protect from "../middlewares/Auth.js";

const router = express.Router();

// Public
router.post("/register", registerUser);
router.post("/login", loginUser);

// Private (needs auth)
router.get("/profile", protect, getUserProfile);
router.put("/update-profile", protect, updateUserProfile);
router.put("/change-password", protect, changeUserPassword);

export default router;
