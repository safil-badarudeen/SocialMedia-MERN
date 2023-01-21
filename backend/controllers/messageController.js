const Message = require("../models/Message");

const createMessage = async (req, res) => {
  try {
    const { from, to, message } = req.body;
    const newMessage = await Message.create({
      message,
      chatUsers: [from, to],
      sender: from,
    });

    return res.status(200).json(newMessage);
  } catch (err) {
    return res.status(500).json({ msg: err });
  }
};

const recieveMessage = async (req, res) => {
  try {
    const from = req.params.user1Id;
    const to = req.params.user2Id;

    const newMessage = await Message.find({
      chatUsers: {
        $all: [from, to],
      },
    }).sort({ updateAt: -1 });

    const allMessage = newMessage.map((msg) => {
      return {
        myself: msg.sender.toString() === from,
        message: msg.message,
      };
    });

    res.status(200).json(allMessage)
  } catch (err) {
    
    console.log(err)// return res.status(500).json({ msg: err });
  }
};

module.exports = {
  createMessage,
  recieveMessage,
};
