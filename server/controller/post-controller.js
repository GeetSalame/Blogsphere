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
    console.log("getAllBlogs request from client for category : ", req.params.catg);
    let blogs;
    try {
        if (req.params.catg === "All") {
            blogs = await Blog.find({});    //finding all blogs in table refrenced to the name Blog
        } else {
            blogs = await Blog.find({ category: req.params.catg });    //finding all blogs matching category in table refrenced to the name Blog
        }
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

export const deleteBlog = async (req, res) => {
    console.log("getBlog request from client : ", req.body);
    try {
        console.log(req.params.id)
        // let blog = await Blog.findById(req.params.id);
        // await blog.remove();
        let deleteB = await Blog.deleteOne({ _id: req.params.id });
        res.status(200).json(deleteB);
    } catch (error) {
        res.status(500).json(error);
    }
}