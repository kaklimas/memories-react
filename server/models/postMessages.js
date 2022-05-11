import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    id: {type: Number, required: true},
    title: {type: String, required: true},
    message: {type: String, required: false},
    creator: {type: String, required: true},
    tags: String,
    selectedFile: {
        type: String
    },
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