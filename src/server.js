const express = require("express");
const cors = require("cors");
const authRouter = require("./routes/auth.router");
const userRouter = require("./routes/user.router");

const app = express();
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

app.use("/users", userRouter);
app.use("/auth", authRouter);

// Endpoint de prueba
app.get("/", (req, res) => {
  res.json({
    message: "koders API v1",
  });
});

module.exports = app;
