import mongoose from "mongoose";

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: false
    },
    description: {
        type: String,
        required: true,
        unique: false
    },
    category: {
        type: String,
        required: true,
        unique: false
    },
    blogimg: {
        type: String,
        required: true,
        unique: false
    },
    author: {
        type: String,
        required: true,
        unique: false
    },
    timepublished: {
        type: String,
        required: true,
        unique: false
    }
})

const Blog = mongoose.model('blog', blogSchema);

export default Blog;