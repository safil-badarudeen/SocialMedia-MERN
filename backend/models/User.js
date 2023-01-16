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
    
    following:{
        type:Array,
        
    },

    followers:{
        type:Array,
    },
    
    mobilenumber:{
        type:String,
        required:true,
    },
    profile:{
        type:String,
    },
    verified:{
        type:Boolean,
        default:false,
        required:true,
    }

 });

module.exports = mongoose.model('User', Userschema);