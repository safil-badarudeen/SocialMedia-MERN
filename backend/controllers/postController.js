const Post = require("../models/Post");
const mongoose = require('mongoose')

const createPost = async (req, res) => {
  let { title, image, video } = req.body;

  let newPost = await Post.create({
    title,
    image,
    video,
    user: req.user.id,
  })


  await newPost.save()
  res.status(200).json({newPost , totalPost:newPost.length});
};

//////////////////////////

const getMyPost = async (req,res)=>{
    const {id} = req.user

    const mypost = await Post.findOne({user : id})

    if(!mypost){
       return res.status(400).json({msg:'You dont have any post'})
    }
    res.status(200).json({yourPost:mypost })
}

////////////////////////

module.exports = { createPost , getMyPost };
