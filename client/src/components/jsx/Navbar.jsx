import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/navbar.css';
import dp from '../../img/profile.svg';
import leftArrow from '../../img/left-arrowSVG.svg';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';

console.log(auth?.currentUser);

function Navbar() {
    const navigate = useNavigate();
    const [isUser, setIsUser] = useState();

    setTimeout(() => {
        setIsUser(auth.currentUser);
        auth.currentUser ? localStorage.setItem("author", auth.currentUser.email) : localStorage.setItem("author", "");
    }, 1000);

    useEffect(() => {
        setIsUser(auth.currentUser);
    }, [auth.currentUser])

    const hideProfilesec = () => {
        try {
            document.getElementById("profileSec").style.display = "none";
            document.getElementById("profileSec").style.right = "-100%";
        } catch (error) {
            console.log(error);
        }
    }

    const showProfileSec = () => {
        try {
            document.getElementById("profileSec").style.display = "flex";
            document.getElementById("profileSec").style.right = "0";
        } catch (error) {
            console.log(error);
        }
    }

    const logOut = async () => {
        try {
            await signOut(auth);
            alert("Logged Out");
            setTimeout(() => {
                navigate("/login");
            }, 500);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div id='navbarbody'>
            <h1 id="logo" onClick={() => { navigate('/') }}><span>Blog</span>Sphere</h1>
            <div id="headlinks">
                <ul>
                    <li onClick={() => navigate('/')}>Home</li>
                    <li onClick={() => navigate('/blogs')}>Blogs</li>
                    <li onClick={() => navigate('/about')}>About</li>
                </ul>
            </div>
            {
                auth.currentUser ?
                    <>
                        <img id='btnNav' onClick={() => showProfileSec()} src={dp} alt="profile" />
                        <div id='profileSec'>
                            <img src={dp} style={{ width: "50px" }} alt="profile" />
                            {/* <p>usernaame</p> */}
                            <p style={{ fontStyle: "italic", fontWeight: "bold" }}>{auth.currentUser.email ? auth.currentUser.email : <></>}</p>
                            <p id='myBlogs'>My Blogs</p>
                            <button className='btn' onClick={() => { logOut() }}>Log Out</button>
                            <img src={leftArrow} id='backArrow' alt="back" onClick={() => { hideProfilesec() }} />
                        </div>
                    </> :
                    <>
                        <button className='btn' onClick={() => { navigate('/login') }}>Login / SignUp</button>
                    </>
            }
        </div>
    )
}

export default Navbar;