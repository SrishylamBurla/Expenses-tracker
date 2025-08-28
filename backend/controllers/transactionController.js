import asyncHandler from "express-async-handler";
import Transaction from "../model/Transaction.js";

//! create transaction
export const createTransaction = asyncHandler(async (req, res) => {
  const { amount, type, category, date, description } = req.body;

  if (!amount || !type || !category || !date) {
    return res.status(400).json("amount, type, category and date are required");
  }

  const parsedDate = new Date(date);
  if (isNaN(parsedDate)) {
    return res.status(400).json("Invalid date format");
  }

  const transaction = await Transaction.create({
    user: req.user,
    amount,
    type,
    category,
    date: parsedDate,
    description,
  });

  res
    .status(201)
    .json({ message: "Transaction created successfully", transaction });
});

//! get all transactions for a user
export const filteredTransactions = asyncHandler(async (req, res) => {
  const { startDate, endDate, type, category } = req.query;

  const filters = { user: req.user };
  if (startDate) {
    filters.date = { ...filters.date, $gte: new Date(startDate) };
  }
  if (endDate) {
    filters.date = { ...filters.date, $lte: new Date(endDate) };
  }
  if (type) {
    filters.type = type;
  }
  if (category) {
    if (category === "All") {
      // no filter
    } else if (category === "Uncategorized") {
      filters.category = "Uncategorized";
    } else {
      filters.category = category;
    }
  }
  const transactions = await Transaction.find(filters).populate("category", "name")

  res.status(200).json(transactions);
});

//! update transaction
export const updateTransaction = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { amount, type, category, date, description } = req.body;

  const transaction = await Transaction.findOne({ _id: id, user: req.user });

  if (!transaction) {
    return res.status(404).json("Transaction not found");
  }

  if (amount !== undefined) transaction.amount = amount;
  if (type !== undefined) transaction.type = type;
  if (category !== undefined) transaction.category = category;
  if (date !== undefined) transaction.date = date;
  if (description !== undefined) transaction.description = description;

  await transaction.save();

  res
    .status(200)
    .json({ message: "Transaction updated successfully", transaction });
});

//! delete transaction
export const deleteTransaction = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const transaction = await Transaction.findOne({ _id: id, user: req.user });

  if (!transaction) {
    return res.status(404).json("Transaction not found");
  }

  await transaction.deleteOne();

  res.status(200).json({ message: "Transaction deleted successfully" });
});
