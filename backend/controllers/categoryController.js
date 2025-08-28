import asyncHandler from "express-async-handler";
import Category from "../model/Category.js";

//! create category
export const createCategory = asyncHandler(async (req, res) => {

  const { name, type } = req.body;

  if (!name || !type) {
    return res
      .status(404)
      .json("name and type are required to create category");
  }

  const normalizedName = name.toLowerCase();

  const validTypes = ["income", "expense"];

  if (!validTypes.includes(type.toLowerCase())) {
    return res.status(400).json("Invalid category type " + type);
  }

  const categoryExists = await Category.findOne({
    user: req.user,
    name: normalizedName,
    type: type.toLowerCase(),
  });

  if (categoryExists) {
    return res.status(400).json("Category already exists");
  }

  const category = await Category.create({
    user: req.user,
    name: normalizedName,
    type: type.toLowerCase(),
  });

  res.status(201).json({ message: "Category created successfully", category });
});

//! get category by id
export const getCategoryById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const category = await Category.findOne({ _id: id, user: req.user });
    if (!category) {
        return res.status(404).json("Category not found");
    }
    res.status(200).json(category);
});


//! get all categories for a user
export const categoriesList = asyncHandler(async (req, res) => {
    const categories = await Category.find({ user: req.user }).sort({ createdAt: -1 });
    res.status(200).json(categories);
});


//! update category
export const updateCategory = asyncHandler(async (req, res) => {
    const { name, type } = req.body;
    const { id } = req.params;

    if (!name || !type) {
        return res
          .status(404)
          .json("name and type are required to update category");
      }
    
      const normalizedName = name.toLowerCase();
    
      const validTypes = ["income", "expense"];
    
      if (!validTypes.includes(type.toLowerCase())) {
        return res.status(400).json("Invalid category type " + type);
      }

      const category = await Category.findOne({ _id: id, user: req.user });

      if (!category) {
        return res.status(404).json("Category not found");
      }

      const categoryExists = await Category.findOne({
        user: req.user,
        name: normalizedName,
        type: type.toLowerCase(),
      });
    
      if (categoryExists) {
        return res.status(400).json("Category already exists");
      }

      category.name = normalizedName;
      category.type = type.toLowerCase();

      await category.save();

      res.status(200).json({ message: "Category updated successfully", category });
});


//! delete category
export const deleteCategory = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const category = await Category.findOne({ _id: id, user: req.user });

    if (!category) {
        return res.status(404).json("Category not found");
    }

    await category.deleteOne();

    res.status(200).json({ message: "Category deleted successfully" });
});
