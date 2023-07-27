import React from 'react';
import '../styles/homepage.css';
import bloggingPNG from '../../img/blogging.png';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';

function Homepage() {
    const navigate = useNavigate();
    return (
        <div id='homepage'>
            <div id="left">
                <h1>Welcome to <span id='logo'><span>Blog</span>Sphere</span></h1>
                <p >Embark the Journey of Exploration</p>
                {/* <p style={{ fontStyle: 'italic' }}>Embark the Journey of Exploration</p> */}
                <button className='btn' onClick={() => { navigate('/create') }}>Start Blogging</button>
            </div>
            <div id="right">
                {
                    bloggingPNG ? <>
                        <img src={bloggingPNG} alt="blogging" />
                    </> :
                        <div style={{ width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <ReactLoading type="spokes" color="#FF0000" height={200} width={100} />
                        </div>
                }
            </div>
        </div>
    )
}

export default Homepage;