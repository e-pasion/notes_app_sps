import mongoose from "mongoose";

const noteSchema=new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    content:{
        type:String,
        require:true,
    },
    date:{
        type : Date,
        default : Date.now
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        require:true
    }
},{
    timestamps:true
})

export default mongoose.model("Note",noteSchema);