require('dotenv').config()
require('express-async-errors')

const express= require('express');
const app = express()
const mongoose = require('mongoose');
const {dbConnection} =require('./db/db')
const port=5000;

// routes

const authRouter = require('./routes/authRoutes');
const postRouter = require('./routes/postRoutes')
const userRouter = require('./routes/userRoutes')


app.use(express.json())

app.use('/api/auth',authRouter)
app.use('/api/post',postRouter)
app.use('/api/user',userRouter)
 



app.get('/',(req,res)=>{
    res.send('social api')
})


const start = async() =>{
    try {
        await dbConnection(process.env.MONGO_URI)
        app.listen(port,()=>{
            console.log(`Server is Listening to port ${port}.....`)
        }
        )

    } catch (error) {
        console.log(error.message)
    }
}

start()
  

