const mongoose = require('mongoose')

 

const Postschema = new mongoose.Schema({ 
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref: 'User'
    },
    title:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    
    video:{
        type:Array,
        
    },

    like:{
        type:Array,
    },
    
    comment:{
        type:String,
        
    },
    comments:[
        {
            userId:{
                type:mongoose.Schema.ObjectId,
                required:true,
            },
            username:{
                type:String,
                required:true,
            },
            comment:{
                type:String,
                required:true,
            },
            profile:{
                type:String,
            }

        }
    ]

 });

module.exports = mongoose.model('Post', Postschema);