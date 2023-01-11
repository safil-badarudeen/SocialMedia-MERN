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


//getyouruploaded post
//////////

const getMyPost = async (req, res) => {
  const { id } = req.user;

  const mypost = await Post.find({ user: id });

  if (!mypost) {
    return res.status(400).json({ msg: "You dont have any post" });
  }
  console.log(typeof mypost)

  res.status(200).json(mypost);
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
//following  // this route can be added into another folder for good readable structure i think. make a look
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
  console.log(typeof posts)
};

//like

const like = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post.like.includes(req.body.user)) {
    await post.updateOne({ $push: { like: req.body.user } });
    return res.status(200).json("post has been liked ");
  } else {
    await post.updateOne({ $pull: { like: req.body.user } });
    return res.status(200).json("like removed");
  }
};

//dislike

// const dislike = async (req, res) => {
//   const post = await Post.findById(req.params.id);
//   if (!post.dislike.includes(req.body.user)) {
//     await post.updateOne({ $push: { dislike: req.body.user } });
//     return res.status(200).json("post has been disliked ");
//   } else {
//     await post.updateOne({ $pull: { dislike: req.body.user } });
//     return res.status(200).json("dislike removed");
//   }
// };

const comment = async (req,res)=>{
  const { postId, comment} = req.body
  const comments = {
    user : req.user.id,
    username:req.user.username,
    comment,
  }
  const post = await Post.findById(postId)
  post.comments.push(comments),
  await post.save();
  res.status(200).json(post)
}

const deletePost = async (req,res) =>{

  const post = await Post.findOne({_id:req.params.id})
 
  if(post.user == req.user.id){
    
     await post.remove()
    // const deletePost = await Post.findByIdAndDelete(req.params.id)
    //    await deletePost.save()
     return res.status(200).json("post has deleted successfully")
  }else{
    return res.status(400).json("you dont have access to delete this post")
  }
 
}

module.exports = {
  createPost,
  getMyPost,
  updatePost,
  following,
  followingPost,
  like,
  // dislike,
  comment,deletePost
};
