import React from 'react';
import '../styles/pagenotfound.css';
import { useNavigate } from 'react-router-dom';

function Pagenotfound() {
    const navigate = useNavigate();
    return (
        <div id='pagenotfound'>
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <button className='btn' onClick={() => { navigate('/') }}>Go back to Home</button>
            <img src="https://www.scrolldroll.com/wp-content/uploads/2020/09/mujhe-kuch-nahi-dikh-raha-maa-Koi-Mil-Gaya-Memes.jpg" alt="not found" />
            <img src="https://i.imgflip.com/33jouq.jpg" alt="not found" />
        </div>
    )
}

export default Pagenotfound;;