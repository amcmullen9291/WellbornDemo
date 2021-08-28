import React from 'react'
import Middlearea from './middlearea';

function welcome() {
  return (
    <div>
              <>
        <div id="container">
        <div className="App">
                <center><h1 id="welcomePage">Wellborn Cabinets</h1></center>
                <div id="sidenav">
          <a className="navmenu" href={"/wordpress/pork"}>Ｓｔａｉｎｓ</a><br/>
          <hr className="spacer"/>
          <a className="navmenu" href={"/wordpress/beans"}>Ｇｌａｚｅｓ</a><br/>
          <hr className="spacer"/>
          <a className="navmenu" href={"/wordpress/paints"}>Ｐａｉｎｔｓ</a><br/>
          <hr className="spacer"/>
          <a className="navmenu" href={"/wordpress/laminites"}>Ｌａｍｉｎａｔｅｓ</a><br/>
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
        <Middlearea/>
        </div>
        </>

    </div>
  )
}

export default welcome
