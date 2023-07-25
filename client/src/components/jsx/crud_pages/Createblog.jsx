import React from 'react';
import '../../styles/createblog.css';
import { useNavigate } from 'react-router-dom';
import categories from '../../../data/categories';

function Createblog() {
  const navigate = useNavigate();
  const defaultBlogTheme = "https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg";
  var BlogTheme;

  const adjustTextArea = (e) => {
    if (e.key === "Enter") {
      let element = document.getElementById("createbblah");
      element.style.height = '1px';
      element.style.height = (5 + element.scrollHeight) + "px";
    }
  }

  const changeBlogTheme = () => {
    console.log("Blog theme chang clicked");
  }

  return (
    <div id='createpage'>
      <div id="createblogtheme">
        <img src={BlogTheme ? BlogTheme : defaultBlogTheme} alt="Blog Image" />
        <img className='editphoto' src="https://cdn-icons-png.flaticon.com/512/860/860763.png" alt="Change Photo" onClick={() => { changeBlogTheme() }} />
      </div>
      <div id="createblogbody">
        <select name="" id="createcategory">
          <option value="" style={{ color: "silver" }} disabled>Select Category</option>
          {categories.map(category =>
            <option value="">{category}</option>
          )}
        </select>
        <input type="text" name="" id="createbtitle" placeholder='Click here to add Title' />
        <textarea name="" id="createbblah" cols="30" rows="5" placeholder='Click here to tell your story...' onKeyUp={(e) => { adjustTextArea(e) }}></textarea>
        <div id="bpostsec">
          <button className='btn' id='bdiscard' onClick={() => { navigate('/') }}>Discard</button>
          <button className='btn' id='bpost' onClick={() => { navigate('/blogs') }}>Post</button>
        </div>
      </div>
    </div>
  )
}

export default Createblog;