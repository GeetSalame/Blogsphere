import React from 'react';
import '../styles/blogpage.css';
import Blogcard from './Blogcard';

function Blogpage() {
    return (
        <div id='blogpage'>
            <div id='filterSec'>
                <h3>Categories</h3>
                <ul id='categoryList'>
                    <li><input type="checkbox" name="" id="" /> &nbsp; Travelling</li>
                    <li><input type="checkbox" name="" id="" /> &nbsp; Movies</li>
                    <li><input type="checkbox" name="" id="" /> &nbsp; Educational</li>
                    <li><input type="checkbox" name="" id="" /> &nbsp; News</li>
                    <li><input type="checkbox" name="" id="" /> &nbsp; Entertainment</li>
                    <li><input type="checkbox" name="" id="" /> &nbsp; Health</li>
                    <li><input type="checkbox" name="" id="" /> &nbsp; Fashion</li>
                    <li><input type="checkbox" name="" id="" /> &nbsp; Others</li>
                </ul>
            </div>
            <img id="pulltag" src="https://cdn-icons-png.flaticon.com/512/2099/2099192.png" alt="" />
            <div id="blogsSec">
                <h3>Blogs</h3>
                <div id='blogs'>
                    <Blogcard />
                    <Blogcard />
                    <Blogcard />
                    <Blogcard />
                    <Blogcard />
                    <Blogcard />
                    <Blogcard />
                    <Blogcard />
                    <Blogcard />
                    <Blogcard />
                </div>
            </div>
        </div>
    )
}

export default Blogpage;