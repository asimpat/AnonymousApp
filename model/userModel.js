import mongoose from "mongoose";

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    
    password:{
        type:String,
        required: true,
        minlength:5
    }


})

export default mongoose.model("User", UserSchema)