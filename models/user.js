const mongoose =require('mongoose')

const userSchema = new mongoose.Schema({


        name:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            required:true,
            trim:true
        },
        phone:{
            type:Number,
            required:true,
            trim:true
        },
        gender:{
            type:String,
            required:true,
            
        },
        age:{
            type:Number,
            required:true,

            
        },
        address:{
            type:String,
            required:true,
            trim:true
        },
        profileImage:{
            type:String,
        }







})


const User = mongoose.model('User',userSchema);

module.exports=User;