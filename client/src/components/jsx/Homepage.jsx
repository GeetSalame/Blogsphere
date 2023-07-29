import React from 'react';
import '../styles/homepage.css';
import bloggingPNG from '../../img/blogging.png';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { auth } from '../../config/firebase';
import Footer from './Footer';

function Homepage() {
    const navigate = useNavigate();
    return (
        <div id='homepage'>
            <div id="homeleft">
                <h1 style={{ color: "black" }}>Welcome to <span id='logo'><span>Blog</span>Sphere</span></h1>
                <p>Embark the Journey of Exploration</p>
                <button className='btn' onClick={() => { auth.currentUser ? navigate('/create') : navigate('/login') }}>Start Blogging</button>
            </div>
            <div id="homeright">
                <img src={bloggingPNG} alt="blogging" />
            </div>
            {/* <div id="homeright">
                {
                    bloggingPNG ? <>
                        <img src={bloggingPNG} alt="blogging" />
                    </> :
                        <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <ReactLoading type="spokes" color="#FF0000" height={200} width={100} />
                        </div>
                }
            </div> */}
        </div>
    )
}

export default Homepage;