require('dotenv').config()

const express= require('express');
const mongoose = require('mongoose');
const app = express()
const port=5000;

// routes

const UserRouter= require('./routes/authRoutes')


app.use(express.json())
app.use('/api/user',UserRouter)
 

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('Database Connected..')
}).catch(()=>{
    console.log("Error on Datatbase connection")
})


app.get('/',(req,res)=>{
    res.send('social api')
})
  

app.listen(port,()=>{
    console.log(`Server is Listening to port ${port}.....`)
}
)