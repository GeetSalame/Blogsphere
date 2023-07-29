import React, { useEffect, useState } from 'react';
import '../../styles/updateblog.css';
import categories from '../../../data/categories';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';

//API calls
import { apiDeleteBlog, apiGetBlog, apiUdpdateBlog } from '../../../service/api';

function Updateblog() {

    const navigate = useNavigate();
    const defaultBlogTheme = "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg";

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
    }, [])  //get blog at every page refresh

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

    const handleDelete = async () => {
        await apiDeleteBlog(blog._id);
        alert("Blog deleted successfully");
        navigate('/blogs');
    }

    useEffect(() => {
        try {
            document.getElementById("blogImg").src = blog.blogimg || "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg";
        } catch (error) {
            console.log(error);
        }
    }, [blog.blogimg])

    const changeBlogThemebyLink = () => {
        console.log("Blog theme chang clicked by link");
        document.getElementById("getImgLink").style.display = "block";
    }

    return (
        <div id='updatepage'>
            {
                blog.title ?
                    <>
                        <div id="updateblogtheme">
                            <img id="blogImg" alt="Blog Image" />
                            <div className='editphoto'>
                                <img src="https://cdn-icons-png.flaticon.com/512/154/154843.png" alt="Change Photo" onClick={() => { changeBlogThemebyLink() }} />
                                <input type="text" name="blogimg" id="getImgLink" placeholder='Enter link here...' onChange={(e) => { handleBlogChange(e) }} />
                            </div>
                        </div>
                        <div id="updateblogbody">
                            <select name="category" id="updatecategory" defaultValue={blog.category} onChange={(e) => { handleBlogChange(e) }}>
                                <option value="" style={{ color: "silver" }} disabled>Select Category</option>
                                {categories.map(category =>
                                    <option value={category}>{category}</option>
                                )}
                            </select>
                            <input type="text" name="title" id="updatebtitle" value={`${blog.title}`} onChange={(e) => { handleBlogChange(e) }} />
                            <textarea name="description" id="updatebblah" cols="30" rows="5" onKeyUp={(e) => { adjustTextArea(e) }} value={`${blog.description}`} onChange={(e) => { handleBlogChange(e) }}></textarea>
                            <div id="updatebpostsec">
                                <button className='btn' id='bdiscard' onClick={() => { navigate(`/blog/${blog._id}`) }}>Discard</button>
                                <button className='btn' id='bdelete' onClick={() => { handleDelete() }}>Delete</button>
                                <button className='btn' id='bpost' onClick={() => { handleUpdate() }}>Update</button>
                            </div>
                        </div>
                    </>
                    : <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <ReactLoading type="spokes" color="#FF0000" height={200} width={100} />
                    </div>
            }
        </div>
    )
}

export default Updateblog;