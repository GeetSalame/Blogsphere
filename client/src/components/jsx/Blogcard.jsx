import React from 'react';
import '../styles/blogcard.css';
import defaultBlogImg from '../../img/defaultBlogTheme.png';
import { useNavigate } from 'react-router-dom';

function Blogcard({ blogObj }) {
    const navigate = useNavigate();
    return (
        <div id='blogcard'>
            <div id='ImgSec'>
                <img id='blogImg' src={blogObj.blogimg || defaultBlogImg} alt="blogImg" />
            </div>
            <div id='BlogdetailSec'>
                <div id='AuthordetailSec'>
                    <div>
                        <p id='category'>{blogObj.category}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div>
                            <p id='author'>{blogObj.author.split("@")[0]}</p>
                            <p id='timestamp'>{blogObj.timepublished}</p>
                        </div>
                        {/* <img id='dp' src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="" /> */}
                    </div>
                </div>
                <a id='title' title={blogObj.title}>{blogObj.title}</a>
                <p id='desc'>{blogObj.description}</p>
                <button className='btn' id='readbtn' onClick={() => { navigate(`/blog/${blogObj._id}`) }}>Read</button>
            </div>
        </div>
    )
}

export default Blogcard;