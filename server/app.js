require('dotenv').config();
const express = require("express");
const favoritesRouter = require("./routes/favorites.js");
const app = express();
PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hola mi server en Express");
});

app.use("/favorites", favoritesRouter);

app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`);
});
