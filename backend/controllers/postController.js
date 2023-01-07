const Post = require("../models/Post");
const mongoose = require("mongoose");

const createPost = async (req, res) => {
  let { title, image, video } = req.body;

  let newPost = await Post.create({
    title,
    image,
    video,
    user: req.user.id,
  });

  await newPost.save();
  res.status(200).json({ newPost, totalPost: newPost.length });
};

//////////////////////////

const getMyPost = async (req, res) => {
  const { id } = req.user;

  const mypost = await Post.find({ user: id });

  if (!mypost) {
    return res.status(400).json({ msg: "You dont have any post" });
  }
  res.status(200).json({ yourPost: mypost, totalPost: mypost.length });
};

////////////////////////
//update post
////////

const updatePost = async (req, res) => {
  const { id } = req.params;
  let post = await Post.findById(id);

  if (!post) {
    return res.status(400).json("No post found on this id");
  }

  post = await Post.findByIdAndUpdate(id, { $set: req.body });
  let updatePost= await post.save()
  res.status(200).json(updatePost)
};

module.exports = { createPost, getMyPost, updatePost };
