import React from 'react';
import emailjs from 'emailjs-com';

export default function emailForm() {

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('gmail', 'template_z1a8o4a', e.target, 'YOUR_USER_ID')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);  //change to Window.alert
      });
  }

  // const options = [
  //   'Stains', 'Glazes', 'Paints', "Laminates", "Melamine"
  // ];

  return (
    <>
    <div id="container">
    <div className="App">
            <center><h1 id="welcomePage">Wellborn Cabinets</h1></center>
            <div id="sidenav">
      <a className="navmenu" href={"/wordpress/stains"}>Ｓｔａｉｎｓ</a><br/>
      <hr className="spacer"/>
      <a className="navmenu" href={"/wordpress/glazes"}>Ｇｌａｚｅｓ</a><br/>
      <hr className="spacer"/>
      <a className="navmenu" href={"/wordpress/paints"}>Ｐａｉｎｔｓ</a><br/>
      <hr className="spacer"/>
      <a className="navmenu" href={"/wordpress/laminates"}>Ｌａｍｉｎａｔｅｓ</a><br/>
      <hr className="spacer"/>
      <a className="navmenu" href={"/wordpress/melamine"}>Ｍｅｌａｍｉｎｅ</a> 
      <hr/> 
      <br/><br/>
      <a className="App-link" id="blog-link" href="https://www.wellborn.com/blog/" target="_blank" rel="noopener noreferrer">
                A Wellborn Blog </a>
                <br/><br/><br/><br/><br/>
                <center><button id="homebutton"><a  id="homebuttontext" className="App-link" href={"/wordpress"}>Return Home</a></button></center>
    </div>
            <span id="addy">
                38669 Hwy 77 S. Ashland, AL 36251
            </span>
            <p>Hello.</p>
    </div>
    <div id="emailMiddleArea">
<div id="blogHolder">
  {/* change form message to dropdowm menus */}
  <form id="emailContainer" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Hello, my name is</label>, 
      <input type="text" name="from_name" />
      <label>. I would like more information about:</label>
            
      <br/><input type="text" name="subject" /><br/>
      <div>(please email your email address)</div>
      <label>Email</label>
      <input type="email" name="from_email" /><br/>
      <br/>
      <hr/>
      <label>Additional information:</label><br/>
      <center><textarea name="html_message" /></center> <br/><br/>
      <input id="emailSend" type="submit" value="Contact us" />
    </form>
</div>
</div>

    </div>
    </>

    );
}