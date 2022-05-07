import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: {type: String, required: true},
    message: {type: String, required: false},
    creator: {type: String, required: true},
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const UserPosts = mongoose.model('posts', postSchema);

export default UserPosts;