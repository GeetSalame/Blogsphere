import React from 'react';
import '../styles/footer.css';

function Footer() {
    return (
        <div class="footer" id="footersec">
            <h2>Let's Connect</h2>
            <ul>
                <li>
                    <img src="https://cdn-icons-png.flaticon.com/512/3488/3488338.png" alt="LinkedIn" />
                    <a href="https://www.linkedin.com/in/geet-salame-57a6a71b6/" target="_blank">LinkedIn</a>
                </li>
                <li>
                    <img src="https://cdn-icons-png.flaticon.com/512/3488/3488435.png" alt="Github" />
                    <a href="https://github.com/GeetSalame" target="_blank">Github</a>
                </li>
                <li>
                    <img src="https://cdn-icons-png.flaticon.com/512/4494/4494481.png" alt="Twitter" />
                    <a href="https://twitter.com/GeetSalame" target="_blank">Twitter</a>
                </li>
            </ul>
        </div>
    )
}

export default Footer;