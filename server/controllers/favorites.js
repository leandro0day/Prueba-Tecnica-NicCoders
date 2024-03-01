const { Favorite } = require("../models");

const FavoriteController = {
  getAll: async (req, res) => {
    try {
      const allFavorites = await Favorite.findAll();

      if (allFavorites.length === 0) {
        return res.status(404).json({ error: "No favorites found" });
      }

      res.status(200).json({ favorites: allFavorites });
    } catch (error) {
      console.error(`Error getting favorites: ${error.message}`);

      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  create: async (req, res) => {
    try {
      const { characterId, name, status, species, type, gender, image, url } =
        req.body;

      // Validate if the characterId already exists in the database
      const existingFavorite = await Favorite.findOne({
        where: { characterId },
      });

      if (existingFavorite) {
        console.error(
          `Favorite with ID ${characterId} already exists in the database`
        );
        return res.status(400).json({
          error: `Favorite with ID ${characterId} already exists in the database`,
        });
      }

      // Validate if there are already 10 favorites
      const totalFavorites = await Favorite.count();
      if (totalFavorites >= 10) {
        console.error("You cannot add more than 10 favorites");
        return res
          .status(400)
          .json({ error: "You cannot add more than 10 favorites" });
      }

      // Create new favorite
      await Favorite.create({
        characterId,
        name,
        status,
        species,
        type,
        gender,
        image,
        url,
      });

      res.status(201).send("Favorite created successfully");
    } catch (error) {
      console.error(`Error creating favorite: ${error.message}`);

      res.status(500).send("Internal Server Error");
    }
  },

  delete: async (req, res) => {
    try {
      const { characterId } = req.params;

      // Attempt to delete the favorite with the specified characterId
      const deletedFavorite = await Favorite.destroy({
        where: { characterId },
      });

      if (deletedFavorite) {
        // If the favorite was successfully deleted, log the success message
        console.log(`Favorite with ID ${characterId} successfully deleted`);

        res.status(200).json({
          message: `Favorite with ID ${characterId} successfully deleted`,
        });
      } else {
        // If no favorite was found with the specified characterId, log the error
        console.error(`Favorite with ID ${characterId} not found`);
        res
          .status(404)
          .json({ error: `Favorite with ID ${characterId} not found` });
      }
    } catch (error) {
      console.error(`Error deleting favorite: ${error.message}`);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};

module.exports = FavoriteController;
