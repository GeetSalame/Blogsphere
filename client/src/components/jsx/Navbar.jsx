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
            hideSideNav();
            setTimeout(() => {
                navigate("/login");
            }, 500);
        } catch (err) {
            console.error(err);
        }
    };

    const showSideNav = () => {
        document.getElementById("sidenav").style.display = "flex";
    }

    const hideSideNav = () => {
        console.log("abofa")
        document.getElementById("sidenav").style.display = "none";
    }

    return (
        <div id='navbarbody'>
            <h1 style={{ color: "black" }} id="logo" onClick={() => { navigate('/') }}><span>Blog</span>Sphere</h1>
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
                            <p style={{ fontStyle: "italic", fontWeight: "bold" }}>{auth.currentUser.email ? auth.currentUser.email.split("@")[0] : <></>}</p>
                            {/* <p id='myBlogs'>My Blogs</p> */}
                            <button className='btn' onClick={() => { logOut() }}>Log Out</button>
                            <img src={leftArrow} id='backArrow' alt="back" onClick={() => { hideProfilesec() }} />
                        </div>
                    </> :
                    <div id='loginSec'>

                        <a href="/login#signinSec"><button style={{ marginRight: "20px" }} className='btn' onClick={() => { navigate('/login#signinSec') }}> LogIn </button></a>
                        <a href="/login#signupSec">
                            <button className='btn2' onClick={() => { navigate('/login#signupSec') }}>SignUp</button>
                        </a>
                    </div>
            }
            <img class="icon" id='navMenu' src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png" alt="menu" onClick={() => { showSideNav() }}></img>
            <div id="sidenav">
                <div id="sideheadlinks">
                    <ul>
                        <li onClick={() => { navigate('/'); document.getElementById("sidenav").style.display = "none" }}>Home</li>
                        <li onClick={() => { navigate('/blogs'); document.getElementById("sidenav").style.display = "none" }}>Blogs</li>
                        <li onClick={() => { navigate('/about'); document.getElementById("sidenav").style.display = "none" }}>About</li>
                    </ul>
                </div>
                {
                    auth.currentUser ?
                        <>
                            <div id='sideprofileSec'>
                                <img src={dp} style={{ width: "50px" }} alt="profile" />
                                {/* <p>usernaame</p> */}
                                <p style={{ fontStyle: "italic", fontWeight: "bold" }}>{auth.currentUser.email ? auth.currentUser.email.split("@")[0] : <></>}</p>
                                {/* <p id='myBlogs'>My Blogs</p> */}
                                <button className='btn' onClick={() => { logOut() }}>Log Out</button>
                                {/* <img src={leftArrow} id='backArrow' alt="back" onClick={() => { hideProfilesec() }} /> */}
                            </div>
                        </> :
                        <div id='sideloginSec'>
                            <a href="/login#signinSec"><button className='btn' onClick={() => { hideSideNav(); navigate('/login#signinSec') }}> LogIn </button></a>
                            <a href="/login#signupSec">
                                <button className='btn2' onClick={() => { hideSideNav(); navigate('/login#signupSec') }}>SignUp</button>
                            </a>
                        </div>
                }
                <button class="btn" style={{ border: "none", margin: "30px auto 10px 10px" }}>
                    <img class="icon" src="https://cdn-icons-png.flaticon.com/512/507/507257.png" style={{ transform: "rotate(180deg)", height: "15px" }} alt="menu" onClick={() => { hideSideNav() }} />
                </button>
            </div>
        </div>
    )
}

export default Navbar;