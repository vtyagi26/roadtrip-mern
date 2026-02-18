import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, "Please enter username"]
    },
    age : {
        type : Number,
        required : [true, "Please enter age"]
    },
    password : {
        type : String, 
        required : true
    },
    email : String
})

export const User = mongoose.model("User", userSchema);