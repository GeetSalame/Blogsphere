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