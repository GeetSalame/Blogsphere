import React, { useEffect, useState } from 'react';
import '../../styles/createblog.css';
import { useNavigate } from 'react-router-dom';
import categories from '../../../data/categories';
import { auth } from '../../../config/firebase';

// API calls
import { apiCreateBlog } from '../../../service/api';

function Createblog() {
  const navigate = useNavigate();

  const formatTime = (time) => {
    const monthArray = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let date = time.getDate();
    let monthIndex = time.getMonth();
    let year = time.getFullYear();

    let result = `${date} ${monthArray[monthIndex]}, ${year}`;
    return result;
  }

  const [blogDetail, setBlogDetail] = useState({
    title: "",
    description: "",
    category: "",
    blogimg: "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg",
    author: localStorage.getItem("author"),
    timepublished: formatTime(new Date())
  });


  const adjustTextArea = (e) => {
    if (e.key === "Enter") {
      let element = document.getElementById("createbblah");
      element.style.height = '1px';
      element.style.height = (5 + element.scrollHeight) + "px";
    }
  }

  const changeBlogThemebyLocal = () => {
    console.log("Blog theme chang clicked");
  }
  const changeBlogThemebyLink = () => {
    console.log("Blog theme chang clicked by link");
    document.getElementById("getImgLink").style.display = "block";

  }


  const changeBlogDetail = (e) => {
    setBlogDetail({ ...blogDetail, [e.target.name]: e.target.value });
  }

  const Publish = async () => {
    if (!(blogDetail.title)) alert("Seems like you forgot to add title");
    else if (!(blogDetail.description)) alert("Seems like you forgot to tell your story");
    else if (!(blogDetail.category) || (blogDetail.category === "none")) alert("Seems like you forgot to select category");
    else if (!localStorage.getItem("author")) alert("Seems like you are not logged in. Please log in and come again. Your work might get lost");
    else if (!(blogDetail.timepublished)) alert("Something went wrong!!! We coudn't fetch current time...");
    else {
      console.log(blogDetail);
      await apiCreateBlog(blogDetail);
      alert("Blog posted!!!!");
      navigate("/blogs");
    }
  }

  useEffect(() => {
    document.getElementById("blogImg").src = blogDetail.blogimg;
  }, [blogDetail.blogimg])

  return (
    <div id='createpage'>
      <div id="createblogtheme">
        <img id='blogImg' alt="Blog Image" />
        <div className='editphoto'>
          {/* <img src="https://cdn-icons-png.flaticon.com/512/860/860763.png" alt="Change Photo" onClick={() => { changeBlogThemebyLocal() }} /> */}
          <img src="https://cdn-icons-png.flaticon.com/512/154/154843.png" alt="Change Photo" onClick={() => { changeBlogThemebyLink() }} />
          <input type="text" name="blogimg" id="getImgLink" placeholder='Enter link here...' onChange={(e) => { changeBlogDetail(e) }} />
        </div>
      </div>
      <div id="createblogbody">
        <select name="category" id="createcategory" onChange={(e) => { changeBlogDetail(e) }}>
          <option value="none" style={{ color: "silver" }}>Select Category</option>
          {categories.map(category =>
            <option value={category}>{category}</option>
          )}
        </select>
        <input type="text" name="title" id="createbtitle" placeholder='Click here to add Title' onChange={(e) => { changeBlogDetail(e) }} />
        <textarea name="description" id="createbblah" cols="30" rows="5" placeholder='Click here to tell your story...' onKeyUp={(e) => { adjustTextArea(e) }} onChange={(e) => { changeBlogDetail(e) }}></textarea>
        {/* <input type="text" name="author" id="createbauthor" maxLength={20} placeholder='Click here to add Author...' onChange={(e) => { changeBlogDetail(e) }} /> */}
        <div id="bpostsec">
          <button className='btn' id='bdiscard' onClick={() => { navigate('/') }}>Discard</button>
          <button className='btn' id='bpost' onClick={() => { Publish(); }}>Publish</button>
        </div>
      </div>
    </div>
  )
}

export default Createblog;