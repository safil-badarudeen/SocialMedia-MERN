const express = require("express");
const router = express.Router();
const {createMessage , recieveMessage} = require('../controllers/messageController');

router.post('/message/create',createMessage);
router.get('/message/recieve/:user1Id/:user2Id',recieveMessage)



module.exports = router;
