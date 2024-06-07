const express = require("express");

const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Endpoint de prueba
app.get("/", (req, res) => {
  res.json({
    message: "koders API v1",
  });
});

module.exports = app;
