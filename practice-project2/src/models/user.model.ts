import mongoose from "mongoose";

interface Iuser{
    name:string,
    email:string,
    password:string,
    image?:string,
    createdAt?:Date,
    updatedAt?:Date,
}


const userSchema = new mongoose.Schema<Iuser>({
    name:{
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
    image:{
        type:String,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
    updatedAt:{
        type:Date,
        default:Date.now,
    },
},
    {timestamps:true}
)


const User = mongoose.models.User || mongoose.model("User", userSchema)

export default User;