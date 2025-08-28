import express from "express";
import {
    createTransaction,
    filteredTransactions,
    updateTransaction,
    deleteTransaction
} from "../controllers/transactionController.js";
import protect from "../middlewares/Auth.js";
const router = express.Router();

router.post("/create", protect, createTransaction);
router.get("/list", protect, filteredTransactions);
router.put("/update/:id", protect, updateTransaction);
router.delete("/delete/:id", protect, deleteTransaction);

export default router;