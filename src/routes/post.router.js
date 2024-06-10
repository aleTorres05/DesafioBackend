const express = require("express");
const postUseCase = require("../usecases/post.usecase");
const auth = require("../middlewares/auth.middleware");

const router = express.Router();

router.get("/", auth, async (request, response) => {
  try {
    const posts = await postUseCase.getAll();
    response.json({
      success: true,
      message: "All post",
      data: { posts },
    });
  } catch (error) {
    response.status(error.status || 500).json({
      success: false,
      error: error.message,
    });
  }
});

router.get("/:id", auth, async (request, response) => {
  try {
    const id = request.params.id;
    const post = await postUseCase.getById(id);

    response.json({
      success: true,
      message: "Post by ID",
      data: {
        post,
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
    const newPost = await postUseCase.create(request.body);

    response.status(201).json({
      success: true,
      message: "Post added",
      data: {
        post: newPost,
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
    const postDeleted = await postUseCase.deleteById(id);

    response.json({
      success: true,
      message: "Post deleted",
      data: {
        post: postDeleted,
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
    const postUpdated = await postUseCase.updateById(id, request.body);

    response.json({
      success: true,
      message: "Post updated",
      data: {
        post: postUpdated,
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
