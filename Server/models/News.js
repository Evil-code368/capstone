import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
    title: {type: String, required: true},
    subTitle: {type: String},
    description: {type: String,required:true},
    category: {type: String, required: true},
    image:{type: String, required: true},
    isPublished:{type: Boolean, required: true},

},{timesstamp: true});

const News = mongoose.model('news',NewsSchema);

export default News;