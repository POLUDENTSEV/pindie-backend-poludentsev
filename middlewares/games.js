const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  const categoryName = req.query["categories.name"];

    let gamesArray = await games
    .find({})
    .populate("categories")
    .populate({path: "users", slelect: "-password" });

if (categoryName) {
  gamesArray = gamesArray.filter((game) => 
    game.categories.some((category) => category.name === categoryName)
  );
}
  req.gamesArray = gamesArray;
  next();
};

const createGame = async (req, res, next) => {
    console.log("POST /games");
    try {
      console.log(req.body);
      req.game = await games.create(req.body);
      next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
          res.status(400).send(JSON.stringify({ message: "Ошибка создания игры" }));
    }
  };

  const findGameById = async (req, res, next) => {
    try {
        req.game = await games
        .findById(req.params.id)
        .populate("categories")
        .populate ({ path: "users", select: "-password"});
    next();
    } catch (error) {
        res.setHeader("Content-Type", "application/json");
        res.status(404).send(JSON.stringify({ message: "Игра не найдена" }));
    }
};

const updateGame = async (req, res, next) => {
  try {
    req.game = await games.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
    res.status(400).send(JSON.stringify({ message: "Ошибка обновления игры" }));
  }
}; 

const deleteGame = async (req, res, next) => {
  try {
    req.game = await games.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Ошибка удаления игры" }));
  }

}; 

module.exports = { findAllGames, createGame, findGameById, updateGame, deleteGame };