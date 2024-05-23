const sendAllCategories = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.categoriesArray));
  };
  
  const sendCategoryById = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.category));
  };
  
  const sendCategoryCreated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(req.category));
  }; 

  const sendCategorysUpdated = (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify({ message: "Игра обновлена" }));
  }; 

  module.exports = { sendAllCategories, sendCategoryById, sendCategoryCreated, sendCategorysUpdated };
  