import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
 News: {type:mongoose.Schema.Types.ObjectId, ref: 'news', required: true},
 name: { type: String, required: true},
 content:{ type: String, required: true},
 isApproved:{type: Boolean, default: false},


},{timesstamp: true});

const Comment = mongoose.model('Comment',commentSchema);

export default Comment;