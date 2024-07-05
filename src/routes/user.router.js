const express = require("express");
const usersUseCase = require("../usecases/users.usecase");
const auth = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/", auth, async (request, response) => {
  try {
    const users = await usersUseCase.getAll();
    response.json({
      success: true,
      message: "All Users",
      data: { users },
    });
  } catch (error) {
    response.status(error.status || 500).json({
      success: false,
      error: error.message,
    });
  }
});

router.get("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const user = await usersUseCase.getById(id);

    response.json({
      success: true,
      message: "User by ID",
      data: {
        user,
      },
    });
  } catch (error) {
    response.status(error.status || 500).json({
      success: false,
      error: error.message,
    });
  }
});

router.post("/", async (request, response) => {
  try {
    const newUser = await usersUseCase.create(request.body);

    response.status(201).json({
      success: true,
      message: "User added",
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    response.status(error.status || 500).json({
      success: false,
      error: error.message,
    });
  }
});

// DELETE
router.delete("/:id", auth, async (request, response) => {
  try {
    const id = request.params.id;
    const userDeleted = await usersUseCase.deleteById(id);

    response.json({
      success: true,
      message: "User deleted",
      data: {
        user: userDeleted,
      },
    });
  } catch (error) {
    response.status(error.status || 500).json({
      success: false,
      error: error.message,
    });
  }
});

// PATCH
router.patch("/:id", auth, async (request, response) => {
  try {
    const id = request.params.id;
    const userUpdated = await usersUseCase.updateById(id, request.body);

    response.json({
      success: true,
      message: "User updated",
      data: {
        user: userUpdated,
      },
    });
  } catch (error) {
    response.status(error.status || 500).json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
