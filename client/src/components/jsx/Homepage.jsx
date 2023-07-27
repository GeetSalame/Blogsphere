import React from 'react';
import '../styles/homepage.css';
import bloggingPNG from '../../img/blogging.png';
import { useNavigate } from 'react-router-dom';

function Homepage() {
    const navigate = useNavigate();
    return (
        <div id='homepage'>
            <div id="left">
                <h1>Welcome to <span id='logo'><span>Blog</span>Sphere</span></h1>
                <p>a tagline for the website</p>
                <button className='btn' onClick={() => { navigate('/create') }}>Start Blogging</button>
            </div>
            <div id="right">
                <img src={bloggingPNG} alt="blogging" />
            </div>
        </div>
    )
}

export default Homepage;