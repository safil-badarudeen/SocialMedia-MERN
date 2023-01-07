const express = require("express");
const router = express.Router();
const {createPost} = require('../controllers/postController');
const {verifyToken} = require('../utils/verifyToken')


router.post('/user/createPost',verifyToken,createPost)



module.exports = router;