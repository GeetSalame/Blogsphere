import React from 'react';
import '../styles/blogpage.css';
import Blogcard from './Blogcard';
import categories from '../../data/categories.js';

function Blogpage() {
    return (
        <div id='blogpage'>
            <div id='filterSec'>
                <h3>Categories</h3>
                <ul id='categoryList'>
                    {
                        categories.map(category =>
                            <li><input type="checkbox" name="" id="" /> &nbsp; {category}</li>
                        )
                    }
                </ul>
            </div>
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