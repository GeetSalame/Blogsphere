import Blog from "../schema/postSchema.js";

export const createBlog = async (req, res) => {
    console.log("CreateBlog request from client : ", req.body);
    try {
        const blog = await new Blog(req.body);  //modifying posted blog with our set schema
        blog.save();    //posting blog object to our database
        res.status(200).json("Blog posted successfully");
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getAllBlogs = async (req, res) => {
    console.log("getAllBlogs request from client : ", req.body);
    try {
        let blogs = await Blog.find({});    //finding all blogs in table refrenced to the name Blog
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const getBlog = async (req, res) => {
    console.log("getBlog request from client : ", req.body);
    try {
        let blog = await Blog.findById(req.params.id);    //finding a blog in table refrenced to the name Blog
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateBlog = async (req, res) => {
    console.log("UpdateBlog request from client : ", req.body);
    try {
        console.log("req.body : ", req.body)
        await Blog.findByIdAndUpdate(req.params.id, { $set: req.body })
        res.status(200).json("Blog posted successfully");
    } catch (error) {
        res.status(500).json(error);
    }
}