import React from 'react';
import '../styles/blogcard.css';

function Blogcard() {
    return (
        <div id='blogcard'>
            <div id='ImgSec'>
                <img id='blogImg' src="https://img.freepik.com/free-photo/toy-bricks-table-with-word-blog_144627-47465.jpg?w=1380&t=st=1690186995~exp=1690187595~hmac=7bee9bc3cdd573a3443ce4fd4ab10b38be5aeb45d738db9883a6b23c8053a14f" alt="blogImg" />
            </div>
            {/* <img id='blogImg' src="https://img.freepik.com/free-vector/blogging-fun-content-creation-online-streaming-video-blog-young-girl-making-selfie-social-network-sharing-feedback-self-promotion-strategy-vector-isolated-concept-metaphor-illustration_335657-855.jpg?t=st=1690186971~exp=1690187571~hmac=55a2651624bf18036791e46ce4089677600b532e9f5d7ceb445a5a035e3c141a" alt="blogImg" /> */}
            <div id='BlogdetailSec'>
                <div id='AuthordetailSec'>
                    <div>
                        <p id='author'>@Author</p>
                        <p id='timestamp'>25 Jul, 2023</p>
                    </div>
                    <img id='dp' src="https://cdn-icons-png.flaticon.com/512/64/64572.png" alt="" />
                </div>
                <a id='title' title='Blog Title : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque facilis aspernatur harum error mollitia natus. Eaque quisquam doloribus, eum amet, quo aut accusantium aspernatur explicabo velit excepturi numquam error et!'>Blog Title : Lorem ipsum dolor sit amet, consectetur adipisicing elit. slkgjsdlfgj s;dlfgj ds;lfgdj sl;gfjsl   </a>
                <p id='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ex eligendi explicabo, aspernatur commodi cum magni. Officiis consequuntur commodi nostrum unde, corrupti eligendi labore eum, pariatur vero qui rerum accusamus.
                    Cumque velit voluptate, molestias ut quam sunt minima laboriosam a sed quia error expedita numquam quidem dolor esse, quisquam atque odio culpa? Praesentium distinctio cumque molestias odio asperiores itaque nisi.
                    Explicabo, ipsum quod voluptate delectus aliquid voluptates facere commodi deserunt deleniti necessitatibus porro obcaecati mollitia dolore placeat corporis ex earum cum illo in voluptas ipsam dicta cumque! Recusandae, assumenda culpa!
                    Quaerat, velit in? Dignissimos consequuntur ullam quod! Quibusdam id reiciendis, placeat voluptate dicta praesentium rem maxime delectus, veritatis blanditiis, obcaecati eligendi. Natus facere libero rerum illum officia modi odio. Amet.
                    Nesciunt rerum beatae dolores? Cum corporis rem iste id error unde porro, modi ducimus maxime sapiente! Aperiam, autem est, numquam in quia maxime amet iste aliquam fugit qui, laboriosam eveniet.</p>
                <button className='btn' id='readbtn'>Read</button>
            </div>
        </div>
    )
}

export default Blogcard;