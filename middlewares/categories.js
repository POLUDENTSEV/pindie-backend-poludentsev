const categories = require("../models/categories");

const findAllCategories = async (req, res, next) => {
  req.categoriesArray = await categories.find({});
  next();
};

const findCategoryById = async (req, res, next) => {
  try {
    req.category = await categories.findById(req.params.id);
    next();
  } catch (error) {
    res.status(404).send({ message: "Category not found" });
  }
};

const createCategory = async (req, res, next) => {
  console.log("POST /categories");
  try {
      console.log(req.body);
    req.category = await categories.create(req.body);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка создания категории" }));
  }
}; 

module.exports = { findAllCategories, findCategoryById, createCategory };
