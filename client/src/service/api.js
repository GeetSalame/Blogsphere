import axios from 'axios';  //to communicate with APIs

const URL = 'https://blogsphereserver.onrender.com';    //URL to server

export const apiCreateBlog = async (blogDetailObj) => {
    try {
        // alert("Hurrah!!! Your Blog is live now...");
        return await axios.post(`${URL}/create`, blogDetailObj);    //making post req to server URL by giving blogdetail variable obj
    } catch (error) {
        alert("API Error : creating post, ", error);
    }
}

export const apiGetAllBlogs = async (catg) => {
    try {
        // console.log("API side : ", catg);
        let allBLogs = await axios.get(`${URL}/blogs/${catg}`);
        return allBLogs.data;   //getting only the data part of whole object where all blog objects are located
    } catch (error) {
        alert("Try Checking your Internet Connection\n", error);
    }
}

export const apiGetBlog = async (blogId) => {
    try {
        let blog = await axios.get(`${URL}/blog/${blogId}`);
        // console.log("Blog data : ", blog.data);
        return blog.data;   //getting only the data part of whole object where all blog objects are located
    } catch (error) {
        alert("API Error while getting post, ", error);
    }
}

export const apiUdpdateBlog = async (blogDetailObj) => {
    try {
        // alert("Hurrah!!! Your Blog is live now...");
        return await axios.post(`${URL}/update/${blogDetailObj._id}`, blogDetailObj);    //making post req to server URL by giving blogdetail variable obj
    } catch (error) {
        alert("API Error : updating post, ", error);
    }
}
export const apiDeleteBlog = async (id) => {
    try {
        await axios.delete(`${URL}/delete/${id}`);    //making post req to server URL by giving blogdetail variable obj
    } catch (error) {
        alert("API Error : updating post, ", error);
    }
}
