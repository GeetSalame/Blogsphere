import React, { useEffect, useState } from 'react';
import '../styles/blogpage.css';
import Blogcard from './Blogcard';
import categories from '../../data/categories.js';
import ReactLoading from 'react-loading';
import { auth } from '../../config/firebase';

//APIs
import { apiGetAllBlogs } from '../../service/api';
import { useNavigate } from 'react-router-dom';

function Blogpage() {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [catg, setCatg] = useState("All");

    useEffect(() => {
        const loadBlogsData = async () => {
            try {
                let allBlogs = await apiGetAllBlogs(catg);
                // console.log("1: ", allBlogs);
                setBlogs(allBlogs);
            } catch (error) {
                alert(error);
            }
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
                <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/7479/7479439.png" alt="" id='crossIcon' onClick={() => { document.getElementById("filterSec").style.display = "none" }} />
                    <h3>Categories</h3>
                    <ul id='categoryList'>
                        <li><input type="radio" name="category" id="" value="All" onChange={(e) => { handleCatChange(e) }} defaultChecked /> &nbsp; All</li>
                        {
                            categories.map(category =>
                                // <li><input type="checkbox" name="" id="" /> &nbsp; {category}</li>
                                <li style={{ color: 'var(--theme-pri)' }}><input type="radio" name="category" id="" onChange={(e) => { handleCatChange(e) }} value={category} /> &nbsp; {category}</li>

                            )
                        }
                    </ul>
                </div>
                <button className='btn' onClick={() => { auth.currentUser ? navigate('/create') : navigate('/login') }}>Create</button>
            </div>
            <div id="blogsSec">
                <h3>Blogs</h3>
                <img id='filterIcon' src="https://cdn-icons-png.flaticon.com/512/10308/10308753.png" alt="" onClick={() => { document.getElementById("filterSec").style.display = "flex" }} />
                <div id='blogs'>
                    {
                        blogs?.length ?
                            blogs.map(blog => (
                                <Blogcard blogObj={blog} />
                            )).reverse() :
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                <p style={{ textAlign: "center" }}><br />No Blogs Avaiable for this category...<br />OR<br /> you can try Refreshing the Page</p>
                                <ReactLoading type="spokes" color="#FF0000" height={100} width={50} />
                            </div>

                    }
                </div>
            </div>
        </div>
    )
}

export default Blogpage;