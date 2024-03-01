const express = require("express");
const FavoriteController = require("../controllers/favorites");

const favoritesRouter = express.Router();

favoritesRouter.get("/", FavoriteController.getAll);

favoritesRouter.post("/", FavoriteController.create);

favoritesRouter.delete("/:characterId", FavoriteController.delete);

module.exports = favoritesRouter;
