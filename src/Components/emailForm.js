import React from 'react';
import emailjs from 'emailjs-com';
import Select from 'react-select';

export default function emailForm() {

  function sendEmail(e) {
    e.preventDefault();   

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
  const finishes = [
    { label: "Stains", value: "Stains" },
    { label: "Glazes", value: "Glazes" },
    { label: "Paints", value: "Paints" },
    { label: "Laminates", value: "Laminates" },
    { label: "Melamine", value: "Melamine" },   
  ];

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
    <br/>
      <input type="hidden" name="contact_number" />
      <label className="emailText">Hello, my name is</label> 
      <input type="text" id="emailName" name="from_name" />.<br/><br/>
     <center><label className="emailText">I would like more information about Wellborn</label>
      <Select  name="subject" id="emailList" options={ finishes } />
      <br/>
      <hr/>
      <div className="emailText">Additional information:</div>
      <input type="text" name="telphone" placeholder="telephone number" /><br/>
      <input type="email" name="from_email" placeholder="enter email"/><br/>
      <input id="emailSend" type="submit" value="Request Brochure" /></center>
    </form>
</div>
</div>

    </div>
    </>

    );
}