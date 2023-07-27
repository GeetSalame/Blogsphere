import React, { useEffect, useState } from 'react';
import '../styles/blogpage.css';
import Blogcard from './Blogcard';
import categories from '../../data/categories.js';

//APIs
import { apiGetAllBlogs } from '../../service/api';

function Blogpage() {
    const [blogs, setBlogs] = useState([]);
    const [catg, setCatg] = useState("All");

    useEffect(() => {
        const loadBlogsData = async () => {
            let allBlogs = await apiGetAllBlogs(catg);
            // console.log("1: ", allBlogs);
            setBlogs(allBlogs);
        }
        loadBlogsData();
    }, [catg])  //get all blogs at every page refresh

    const handleCatChange = (e) => {
        if (e.target.checked) { setCatg(e.target.value) }
        // console.log("catg, ", catg)
    }

    return (
        <div id='blogpage'>
            <div id='filterSec'>
                <h3>Categories</h3>
                <ul id='categoryList'>
                    <li><input type="radio" name="category" id="" value="All" onChange={(e) => { handleCatChange(e) }} defaultChecked /> &nbsp; All</li>
                    {
                        categories.map(category =>
                            // <li><input type="checkbox" name="" id="" /> &nbsp; {category}</li>
                            <li><input type="radio" name="category" id="" onChange={(e) => { handleCatChange(e) }} value={category} /> &nbsp; {category}</li>

                        )
                    }
                </ul>
            </div>
            <div id="blogsSec">
                <h3>Blogs</h3>
                <div id='blogs'>
                    {
                        blogs.length ? blogs.map(blog => (
                            <Blogcard blogObj={blog} />
                        )).reverse() : <><p style={{ textAlign: "center" }}><br />No Blogs Avaiable for this category...<br />OR<br /> you can try Refreshing the Page</p></>
                    }
                </div>
            </div>
        </div>
    )
}

export default Blogpage;