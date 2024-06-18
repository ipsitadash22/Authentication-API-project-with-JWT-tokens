const mongoose=require('mongoose');;
const Schema=mongoose.Schema;
const UserSchema=new Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String ,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})//here users is the collection
const UserModel=mongoose.model('users',UserSchema);
module.exports=UserModel;
