const express = require("express");
const router = express.Router();
const {
  createPost,
  getMyPost,
  updatePost,
  following,
  followingPost,
  like,
  // dislike,
  comment,
  deletePost
} = require("../controllers/postController");
const { verifyToken } = require("../utils/verifyToken");

router.post("/user/createPost", verifyToken, createPost);
router.get("/user/getMyPost", verifyToken, getMyPost);

//like and dislike
router.put("/:id/like", verifyToken, like);
// router.put("/:id/dislike", verifyToken, dislike);

//comment 
router .put ('/user/comment',verifyToken, comment)

router.put("/user/updatePost/:id", verifyToken, updatePost);

router.put("/user/following/:id", verifyToken, following);

//delete Post 

router.delete("/user/deletePost/:id",verifyToken,deletePost)

//fetch post from following
router.get("/user/followingPost/:id", verifyToken, followingPost);

module.exports = router;
