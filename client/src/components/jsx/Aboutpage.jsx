import React, { useEffect } from 'react';
import '../styles/aboutpage.css';
import emailjs from '@emailjs/browser';
import Footer from './Footer';

function Aboutpage() {

  const sendFeedback = () => {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      feedback: document.getElementById("feedback").value,
    };

    const serviceID = "service_a1wg1oc";
    const templateID = "template_4ojyhc4";
    const publicKey = "yucwm7tgHX7RBOuYA";

    emailjs.send(serviceID, templateID, params, publicKey)
      .then(
        res => {
          document.getElementById("feedback").value = "";

          console.log("Feedback Form entries : ", res);
          alert("Your feedback has been sent. Thank you!");
        }
      )
      .catch((err) => console.log("Error occured : ", err));
  }

  useEffect(() => {
    localStorage.getItem("author") ?
      document.getElementById("name").value = localStorage.getItem("author").split("@")[0] : <></>
    localStorage.getItem("author") ?
      document.getElementById("email").value = localStorage.getItem("author") : <></>

    localStorage.getItem("author") ?
      document.getElementById("name").disabled = true : <></>
    localStorage.getItem("author") ?
      document.getElementById("email").disabled = true : <></>
  }, [])

  return (
    <div id='aboutpage'>
      <div id='aboutSec'>
        <h1 className='heading'>About</h1>
        <p>This is an Blog Application made by <a href="https://www.linkedin.com/in/geet-salame-57a6a71b6/" target="_blank">Geet Salame</a>, where you will experience seamless and efficient connection and blogging. <br />Start blogging now and embark on a journey of connection and exploration!</p>
      </div>
      <div id="feedbackSec">
        <h1 className='heading'>Feedback</h1>
        <input type="text" name="" className='inp' id="name" placeholder='Enter Your Name...' />
        <input type="text" name="" className='inp' id="email" placeholder='Enter Your Email...' />
        <p style={{ color: "silver", marginRight: "auto" }}>This will be used to give reply to your feedback</p>
        <textarea name="" className='inp' id="feedback" placeholder='Enter Feedback...' cols="30" rows="50"></textarea>
        <button className='btn' onClick={() => { sendFeedback() }}>Send</button>
      </div>
      <Footer />
    </div>
  )
}

export default Aboutpage;