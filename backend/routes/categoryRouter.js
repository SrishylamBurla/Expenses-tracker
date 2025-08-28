import express from "express";
import {
  createCategory,
    categoriesList,
    updateCategory,
    deleteCategory,
    getCategoryById,
} from "../controllers/categoryController.js";
import protect from "../middlewares/Auth.js";
const router = express.Router();

router.post("/create", protect, createCategory);
router.get("/list", protect, categoriesList);
router.get("/:id", protect, getCategoryById);
router.put("/update/:id", protect, updateCategory);
router.delete("/delete/:id", protect, deleteCategory);

export default router;