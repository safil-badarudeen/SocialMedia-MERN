const express = require("express");
const router = express.Router();
const {createPost , getMyPost , updatePost} = require('../controllers/postController');
const {verifyToken} = require('../utils/verifyToken')


router.post('/user/createPost',verifyToken,createPost)
router.get('/user/getMyPost',verifyToken,getMyPost)
router.put('/user/updatePost/:id',verifyToken,updatePost)


module.exports = router;