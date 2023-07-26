import axios from 'axios';  //to communicate with APIs

const URL = 'http://localhost:8000';    //URL to server

export const apiCreateBlog = async (blogDetailObj) => {
    try {
        // alert("Hurrah!!! Your Blog is live now...");
        return await axios.post(`${URL}/create`, blogDetailObj);    //making post req to server URL by giving blogdetail variable obj
    } catch (error) {
        alert("API Error : creating post, ", error);
    }
}

export const apiGetAllBlogs = async () => {
    try {
        let allBLogs = await axios.get(`${URL}/blogs`);
        return allBLogs.data;   //getting only the data part of whole object where all blog objects are located
    } catch (error) {
        alert("API Error : getting all posts, ", error);
    }
}