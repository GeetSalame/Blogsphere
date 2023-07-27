import React, { useEffect, useState } from 'react';
import '../../styles/readblog.css';
import defaultBlogTheme from '../../../img/defaultBlogTheme.png';
import { useNavigate } from 'react-router-dom';

//API calls
import { apiDeleteBlog, apiGetBlog } from '../../../service/api';

function Readblog(props) {
    const navigate = useNavigate();

    const [blog, setBlog] = useState({});
    const blogId = window.location.href.split('/').slice(-1)[0];

    useEffect(() => {
        const loadBlogData = async () => {
            let Blog = await apiGetBlog(blogId);
            // console.log("1: ", props);
            setBlog(Blog);
        }
        loadBlogData();
    }, [])  //get all blogs at every page refresh

    const handleDelete = async () => {
        await apiDeleteBlog(blog._id);
        alert("Blog deleted successfully");
        navigate('/blogs');
    }

    return (
        <div id='readpage'>
            <div id="blogtheme">
                <img src={defaultBlogTheme} alt="Blog Image" />
            </div>
            <div id="blogbody">
                <h1 id="btitle">{blog.title}</h1>
                <div id="bcredential">
                    <p id="btimestamp">{blog.timepublished}</p>
                    <p id="buthor">@{blog.author}</p>
                </div>
                <p id="bblah">{blog.description}</p>
                <div id="beditsec">
                    <button className='btn' id='bdelete' onClick={() => { handleDelete() }}>Delete</button>
                    <button className='btn' id='bupdate' onClick={() => { navigate(`/update/${blog._id}`) }}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default Readblog;