const createError = require("http-errors");
const Posts = require("../models/posts.model");
const encrypt = require("../lib/encrypt");

async function create(postData) {
  const newPost = await Posts.create(postData);

  return newPost;
}

async function getAll() {
  const allPosts = await Posts.find();
  return allPosts;
}

async function getById(id) {
  return await Posts.findById(id);
}

async function deleteById(id) {
  return Posts.findByIdAndDelete(id);
}

async function updateById(id, newPostData) {
  const postUpdated = await Posts.findOneAndUpdate(id, newPostData);
  return postUpdated;
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  updateById,
};
