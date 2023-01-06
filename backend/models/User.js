const mongoose = require('mongoose')

const Userschema = new mongoose.Schema({ 
    username:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    
    friends:{
        type:Array,
        
    },

    pending:{
        type:Array,
    },
    
    mobilenumber:{
        type:String,
        required:true,
    },
    profile:{
        type:String,
    },

 });

module.exports = mongoose.model('User', Userschema);