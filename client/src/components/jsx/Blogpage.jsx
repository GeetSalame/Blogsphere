import React, { useEffect, useState } from 'react';
import '../styles/blogpage.css';
import Blogcard from './Blogcard';
import categories from '../../data/categories.js';

//APIs
import { apiGetAllBlogs } from '../../service/api';

function Blogpage() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const loadBlogsData = async () => {
            let allBlogs = await apiGetAllBlogs();
            // console.log("1: ", allBlogs);
            setBlogs(allBlogs);
        }
        loadBlogsData();
    }, [])  //get all blogs at every page refresh

    return (
        <div id='blogpage'>
            <div id='filterSec'>
                <h3>Categories</h3>
                <ul id='categoryList'>
                    {
                        categories.map(category =>
                            <li><input type="checkbox" name="" id="" /> &nbsp; {category}</li>
                        )
                    }
                </ul>
            </div>
            <div id="blogsSec">
                <h3>Blogs</h3>
                <div id='blogs'>
                    {blogs.map(blog => (
                        <Blogcard blogObj={blog} />
                    )).reverse()}
                </div>
            </div>
        </div>
    )
}

export default Blogpage;