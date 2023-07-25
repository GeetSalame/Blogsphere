import React from 'react';
import '../../styles/readblog.css';
import defaultBlogTheme from '../../../img/defaultBlogTheme.png';

function Readblog() {
    return (
        <div id='readpage'>
            <div id="blogtheme">
                <img src={defaultBlogTheme} alt="Blog Image" />
            </div>
            <div id="blogbody">
                <h1 id="btitle">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus sit repudiandae, iste consectetur recusandae temporibus non porro similique reiciendis aliquid dolor voluptate repellendus tempora. Totam nemo eligendi dolores quisquam ducimus.</h1>
                <div id="bcredential">
                    <p id="btimestamp">25 Jul, 2023</p>
                    <p id="buthor">@GeetSalame</p>
                </div>
                <p id="bblah">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quo debitis nesciunt facere aliquam, ut sint porro qui ullam id voluptatum tempore amet, cum dolor? Voluptates beatae iure assumenda quo!
                    Veritatis inventore repellendus ex doloribus, voluptates aut pariatur veniam doloremque corporis consequuntur deserunt minus maxime esse consectetur eligendi corrupti quisquam ullam eius modi omnis! At ullam veritatis reprehenderit omnis et.
                    Eum corrupti dolor expedita nemo tenetur itaque quidem optio perspiciatis deleniti excepturi quia totam nam, porro culpa reiciendis. Nostrum nisi quia praesentium officia quaerat sapiente nemo id, reprehenderit quas saepe?
                    Temporibus voluptate error, ea animi vel ipsam iure? Cum excepturi, odio commodi ipsa dolorum itaque culpa dolor, debitis, fugiat nostrum obcaecati hic iusto ex nesciunt magni veritatis nam. Optio, dignissimos.
                    Placeat excepturi quos magni nobis, saepe consequatur quaerat reprehenderit est accusantium labore iusto, laborum possimus mollitia error et sequi distinctio eos ad animi, minima similique sunt pariatur. Pariatur, earum quam.
                    Dignissimos reiciendis, veniam ducimus error amet velit placeat facilis ratione eos harum quos magnam dolorum delectus fugit modi incidunt fuga tenetur aut, odio labore animi necessitatibus? Quae deserunt voluptates repellendus!
                    Cumque labore reprehenderit reiciendis modi ad odio amet consequuntur rem quos odit, praesentium, saepe doloribus fugiat! Ad, veritatis? Assumenda, nesciunt animi! Nisi molestiae corrupti odio, vitae quod temporibus consequatur nobis.
                    Molestiae, id corporis ipsam ipsa iusto animi vero aspernatur facilis quisquam sapiente nulla aliquam eum tempora sit minima, explicabo voluptas nostrum ratione tempore iste eveniet fuga culpa nemo deleniti? Soluta.
                    Impedit harum natus repellendus explicabo fugiat in sed perferendis dicta, vero eos sequi porro omnis nesciunt officia? Facilis incidunt maiores voluptatibus, nisi eaque optio nesciunt dolorem, reprehenderit autem sequi magnam?
                    Voluptates atque eaque at facilis, ipsam labore natus expedita explicabo alias eius tempore libero culpa beatae, minima commodi officiis reiciendis. Necessitatibus excepturi, magnam labore odio numquam cupiditate nam assumenda pariatur.</p>
            </div>
        </div>
    )
}

export default Readblog;