import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    tagline: String,
    dept: String,
    desc: { type: [String], default: [] },
    selectedFile: String,
    
})

var Posts = mongoose.model('Posts', postSchema);

export default Posts;