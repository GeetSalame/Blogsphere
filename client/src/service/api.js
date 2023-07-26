import axios from 'axios';  //to communicate with APIs

const URL = 'http://localhost:8000';    //URL to server

export const apiCreateBlog = async (blogDetailObj) => {
    try {
        // alert("Hurrah!!! Your Blog is live now...");
        return await axios.post(`${URL}/create`, blogDetailObj);    //making post req to server URL by giving blogdetail variable obj
    } catch (error) {
        alert("Error while creating post : ", error);
    }
}