const express = require("express");
const FavoriteController = require("../controllers/favorites");
const favoritesRouter = express.Router();

favoritesRouter.get("/", FavoriteController.getAll);

module.exports = favoritesRouter;
