const Post = require("../models/Post");
const User = require("../models/User");

// const { findById } = require("../models/User");

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

//////////////
//getyouruploaded post
//////////

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
  let updatePost = await post.save();
  res.status(200).json(updatePost);
};

////////////////
//following
///////////////

const following = async (req, res) => {
  const { id } = req.params;

  if (id !== req.body.user) {
    const user = await User.findById(id);
    const otherUser = await User.findById(req.body.user);

    if (!user.followers.includes(req.body.user)) {
      await user.updateOne({ $push: { followers: req.body.user } });
      await otherUser.updateOne({ $push: { following: id } });
      return res.status(200).json("you started following");
    } else {
      return res.status(400).json("you already follow the user");
    }
  } else {
    res.status(400).json("you cannot follow yourself");
  }
};

//fetch Post from following
///////////////////////////

const followingPost = async (req, res) => {
  const user = await User.findById(req.params.id);
  const posts = await Promise.all(
    user.following.map((item) => {
      return Post.find({ user: item });
    })
  );
  res.status(200).json(posts);
};

module.exports = {
  createPost,
  getMyPost,
  updatePost,
  following,
  followingPost,
};
