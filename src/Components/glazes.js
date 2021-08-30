import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectedFinish } from '../Actions/FinishActions';

function Glazes() {
    const [glazesList, setGlazesList ] = useState([
        //Cherry and Character Cherry Stains
        {id: "1", nameOf: "AutumnSpice", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
        {id: "2", nameOf: "Blush", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
        {id: "3", nameOf: "Caramel", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
        {id: "4", nameOf: "Dark", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
        {id: "6", nameOf: "Espresso", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
        {id: "7", nameOf: "Gauntlet", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
        {id: "16", nameOf: "Shale", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
        {id: "17", nameOf: "Sienna", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
        {id: "18", nameOf: "Suede", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
    ])
    const dispatch2 = useDispatch();
    const fetchGlazes = () => {
        dispatch2(selectedFinish(glazesList));
        console.log("Current listings:", glazesList)
      };
      
      useEffect(() => {
        fetchGlazes();
      }, []);

      if (Object.keys(glazesList).length > 0) {
        var RenderGlazes = glazesList.map(glaze => {
          const {id, nameOf, material, premium_series, aspire, estate_series, elegant_bath, select_series, home_concepts } = glaze;
          return (
            <>
            <th>
            </th>
          <tr key={id}>
            <td className="rowcss">{nameOf}</td><td className="tableSpacer"></td><td >{material}</td><td className="tableSpacer"></td><td>{premium_series}</td><td>{estate_series}</td><td>{elegant_bath}</td><td>{aspire}</td><td>{home_concepts}</td><td>{select_series}</td>
          </tr>
          </>
            )
        })
      }
    
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
    <div id="middleArea">
    <a id="emailButton" href={"/wordpress/contact"}>Contact Us</a>
<div id="blogHolder">
    <center><p id="blog">Glazes Page</p></center>
    <div id="tableborder">
    <div id= "selectedFinish">
    <table>
        <tr id="header">
          <th id="venue">Finish</th>
          <th></th>
          <th id="city">Material</th>
          <th></th>
          <th id="team"colspan="6">Product Line</th>
        </tr>
        <tr><td></td><td></td><td></td><td></td><td>PremiumSeries</td><td>EstateSeries</td><td>ElegantBath</td><td>Aspire</td><td>HomeConcepts</td><td>SelectSeries</td></tr>
        {RenderGlazes}
        </table>
        </div>
    </div>
</div>
</div>

    </div>
    </>

)
}

export default Glazes;
