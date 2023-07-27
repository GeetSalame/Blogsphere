import React, { useEffect, useState } from 'react';
import '../../styles/updateblog.css';
import categories from '../../../data/categories';
import { useNavigate } from 'react-router-dom';

//API calls
import { apiGetBlog } from '../../../service/api';
import { apiUdpdateBlog } from '../../../service/api';

function Updateblog() {

    const navigate = useNavigate();
    const defaultBlogTheme = "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg";
    var BlogTheme;

    const adjustTextArea = (e) => {
        if (e.key === "Enter") {
            let element = document.getElementById("updatebblah");
            element.style.height = '1px';
            element.style.height = (5 + element.scrollHeight) + "px";
        }
    }

    const changeBlogTheme = () => {
        console.log("Blog theme chang clicked");
    }

    const [blog, setBlog] = useState({});
    const blogId = window.location.href.split('/').slice(-1)[0];

    useEffect(() => {
        const loadBlogData = async () => {
            // let fetchedBlog = await apiGetBlog(blogId);
            setBlog(await apiGetBlog(blogId));
            // console.log(fetchedBlog);
        }
        loadBlogData();
        console.log(blog);
    }, [])  //get all blogs at every page refresh

    const handleBlogChange = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value });
    }   //bhai yar isne dimag khrab kiya tha.. isne nhi precisely, vo value or defaultvalue ne

    const handleUpdate = async () => {
        if (!(blog.title)) alert("Seems like you forgot to add title");
        else if (!(blog.description)) alert("Seems like you forgot to tell your story");
        else if (!(blog.category) || (blog.category === "none")) alert("Seems like you forgot to select category");
        else if (!(blog.blogimg)) alert("Something went wrong!!! We couldn't get your blog image");
        else if (!(blog.author)) alert("Seems like you are not logged in. Please log in and come again. Your work might get lost");
        else if (!(blog.timepublished)) alert("Something went wrong!!! We coudn't fetch current time...");
        else {
            console.log(blog);
            await apiUdpdateBlog(blog);
            alert("Blog Updated!!!!");
            navigate(`/blog/${blog._id}`)
        }
    }

    return (
        <div id='updatepage'>
            <div id="updateblogtheme">
                <img src={BlogTheme ? BlogTheme : defaultBlogTheme} alt="Blog Image" />
                <img className='editphoto' src="https://cdn-icons-png.flaticon.com/512/860/860763.png" alt="Change Photo" onClick={() => { changeBlogTheme() }} />
            </div>
            <div id="updateblogbody">
                <select name="" id="updatecategory">
                    <option value="" style={{ color: "silver" }} disabled>Select Category</option>
                    {categories.map(category =>
                        <option value="">{category}</option>
                    )}
                </select>
                <input type="text" name="title" id="updatebtitle" value={`${blog.title}`} onChange={(e) => { handleBlogChange(e) }} />
                <textarea name="description" id="updatebblah" cols="30" rows="5" onKeyUp={(e) => { adjustTextArea(e) }} value={`${blog.description}`} onChange={(e) => { handleBlogChange(e) }}></textarea>
                <div id="updatebpostsec">
                    <button className='btn' id='bdiscard' onClick={() => { navigate(`/blog/${blog._id}`) }}>Discard</button>
                    <button className='btn' id='bdelete' onClick={() => { navigate('/blogs') }}>Delete</button>
                    <button className='btn' id='bpost' onClick={() => { handleUpdate() }}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default Updateblog;