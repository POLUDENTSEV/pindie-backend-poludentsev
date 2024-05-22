const categories = require("../models/categories");

const findAllcategories = async (req, res, next) => {
    req.categoriesArray = await categories.find({});
    next();
};

module.exports = findAllcategories;