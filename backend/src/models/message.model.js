import { timeStamp } from "console";
import mongoose, { mongo } from "mongoose";
import { type } from "os";

const messageSchema=new mongoose.Schema(
    {
        senderId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required: true
        },

        recieverId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },

        text:{
            type: String,
        },

        image:{
            type:String,
        },
    },
    {timeStamp:true}
);

const Message = mongoose.model("Message",messageSchema);

export default Message;