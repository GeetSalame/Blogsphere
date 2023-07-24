import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
    const navigate = useNavigate();

    return (
        <div id='navbarbody'>
            <h1 id="logo"><span>Blog</span>Sphere</h1>
            <div id="headlinks">
                <ul>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li onClick={() => navigate('/blogs')}>Blogs</li>
                    <li onClick={() => navigate('/about')}>About</li>
                </ul>
            </div>
            <button id='btnNav' onClick={() => navigate('/create') }>Create</button>
        </div>
    )
}

export default Navbar;