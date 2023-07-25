import React from 'react'

function Footer() {
    const currentDate = new Date();
    return (
        <div id="footer">
            &copy;{currentDate.getFullYear()} Blogsphere
        </div>
    )
}

export default Footer;