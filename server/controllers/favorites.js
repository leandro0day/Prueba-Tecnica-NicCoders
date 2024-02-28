const { Favorite } = require("../models");

const FavoriteController = {
  getAll: async (req, res) => {
    try {
      const allFavorites = await Favorite.findAll();
      console.log(allFavorites);
      res.send(allFavorites);
    } catch (error) {
      console.error(`Error al obtener favoritos: ${error.message}`);
      res.status(500).send("Internal Server Error");
    }
  },
};

module.exports = FavoriteController;
