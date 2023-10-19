import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
        trim:true
    }
},{
    timestamps:true
})

export default mongoose.model("User",userSchema);