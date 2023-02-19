require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { dbConnection } = require("./db/db");
const cors = require("cors");
const socket = require("socket.io");

const port = 5000;

// routes
const authRouter = require("./routes/authRoutes");
const postRouter = require("./routes/postRoutes");
const userRouter = require("./routes/userRoutes");
const accountRouter = require("./routes/accountRoutes");
const messageRouter = require("./routes/messageRoutes");


app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);
app.use("/api/user", userRouter);
app.use("/api/account", accountRouter);
app.use("/api/chat", messageRouter);

app.get("/", (req, res) => {
  res.send("social api");
});

const db = async () => {
  try {
    await dbConnection(process.env.MONGO_URI);
    console.log("Database Connected")
  } catch (error) {
    console.log(error.message);
  }
};

db()

const server =  app.listen(port,()=>{
    console.log(`Server is Listening to port ${port}.....`)
})

const io = socket(server, {
  cors: {
    origin: "http://localhost:3001",
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatsocket = socket;
  socket.on("addUser", (id) => {
    onlineUsers.set(id, socket.id);
  });
  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.message);
    }
  });
});
