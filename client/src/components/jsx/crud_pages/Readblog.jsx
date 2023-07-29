import React, { useEffect, useState } from 'react';
import '../../styles/readblog.css';
import defaultBlogTheme from '../../../img/defaultBlogTheme.png';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';

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
            {
                blog.title ?
                    <>
                        <div id="blogtheme">
                            <img src={blog.blogimg || defaultBlogTheme} alt="Blog Image" />
                        </div>
                        <div id="blogbody">
                            <h1 id="btitle">{blog.title}</h1>
                            <div id="bcredential">
                                <p id="btimestamp">{blog.timepublished}</p>
                                <p id="buthor">@{blog.author.split("@")[0]}</p>
                            </div>
                            <p id="bblah">{blog.description}</p>
                            {(blog.author === localStorage.getItem("author")) ?
                                <div id="beditsec">
                                    <button className='btn' id='bdelete' onClick={() => { handleDelete() }}>Delete</button>
                                    <button className='btn' id='bupdate' onClick={() => { navigate(`/update/${blog._id}`) }}>Update</button>
                                </div> : <></>
                            }
                        </div>
                    </>
                    : <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <ReactLoading type="spokes" color="#FF0000" height={200} width={100} />
                    </div>
            }
        </div >
    )
}

export default Readblog;