const Post = require("../models/Post");

const createPost = async (req, res) => {
  let { title, image, video } = req.body;

  let newPost = new Post({
    title,
    image,
    video,
    user: req.user.id,
  });

  res.status(200).json(newPost);
};

module.exports = { createPost };
