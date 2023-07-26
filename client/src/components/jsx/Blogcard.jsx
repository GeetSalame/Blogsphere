import React from 'react';
import '../styles/blogcard.css';
import defaultBlogImg from '../../img/defaultBlogTheme.png';
import { useNavigate } from 'react-router-dom';

function Blogcard({ blogObj }) {
    const navigate = useNavigate();
    return (
        <div id='blogcard'>
            <div id='ImgSec'>
                <img id='blogImg' src={defaultBlogImg} alt="blogImg" />
            </div>
            {/* <img id='blogImg' src="https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg?t=st=1690186971~exp=1690187571~hmac=55a2651624bf18036791e46ce4089677600b532e9f5d7ceb445a5a035e3c141a" alt="blogImg" /> */}
            <div id='BlogdetailSec'>
                <div id='AuthordetailSec'>
                    <div>
                        <p id='category'>{blogObj.category}</p>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <div>
                            <p id='author'>@{blogObj.author}</p>
                            <p id='timestamp'>{blogObj.timepublished}</p>
                        </div>
                        <img id='dp' src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="" />
                    </div>
                </div>
                <a id='title' title={blogObj.title}>{blogObj.title}</a>
                <p id='desc'>{blogObj.description}</p>
                <button className='btn' id='readbtn' onClick={() => { navigate('/blog:id') }}>Read</button>
            </div>
        </div>
    )
}

export default Blogcard;