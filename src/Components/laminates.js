import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectedFinish } from '../Actions/FinishActions';

function Laminates() {
    const [laminatesList, setLaminatesList ] = useState([
        {id: "178", nameOf: "Linen", material: "Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "X", home_concepts: "X", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
        {id: "179", nameOf: "NaturalMaple", material: "Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "X", home_concepts: "X", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
        {id: "180", nameOf: "Sienna", material: "Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "X", home_concepts: "X", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
        {id: "181", nameOf: "Spiceberry", material: "Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "X", home_concepts: "X", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
        {id: "182", nameOf: "White", material: "Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "X", home_concepts: "X", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
   //Designer Laminates
        {id: "183", nameOf: "BronzedLeather", material: "Designer Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
        {id: "184", nameOf: "Dusk", material: "Designer Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
        {id: "185", nameOf: "HighGlossCinder", material: "Designer Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
        {id: "186", nameOf: "HighGlossEbony", material: "Designer Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
        {id: "187", nameOf: "HighGlossGold", material: "Designer Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
        {id: "188", nameOf: "HighGlossMoonlight", material: "Designer Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
        {id: "189", nameOf: "HighGlossPoppyRed", material: "Designer Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
        {id: "190", nameOf: "HighGlossStardust", material: "Designer Laminate", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
   
    ])
    const dispatch2 = useDispatch();
    const fetchLaminates = () => {
        dispatch2(selectedFinish(laminatesList));
        console.log("Current listings:", laminatesList)
      };
      
      useEffect(() => {
        fetchLaminates();
      }, []);

      if (Object.keys(laminatesList).length > 0) {
        var RenderLaminates = laminatesList.map(glaze => {
          const {id, nameOf, material, premium_series, aspire, estate_series, elegant_bath, select_series, home_concepts } = glaze;
          return (
            <>
            <th>
            </th>
          <tr key={id}>
            <td className="rowcss">{nameOf}</td><td className="tableSpacer"></td><td className="FinishMaterial">{material}</td><td className="tableSpacer"></td><td className="FinishSeries">{premium_series}</td><td className="FinishSeries">{estate_series}</td><td className="FinishSeries">{elegant_bath}</td><td className="FinishSeries">{aspire}</td><td className="FinishSeries">{home_concepts}</td><td className="FinishSeries">{select_series}</td>
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
                <br/><br/>
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
    <center><p id="blog">Laminates Page</p></center>
    <div id="tableborder">
    <div id= "selectedFinish">
    <table>
        <tr className="header">
          <th>Finish</th>
          <th></th>
          <th >Material</th>
          <th></th>
          <th colspan="6">Product Line</th>
        </tr>
        <tr><td></td><td></td><td></td><td></td><td>PremiumSeries</td><td>EstateSeries</td><td>ElegantBath</td><td>Aspire</td><td>HomeConcepts</td><td>SelectSeries</td></tr>
        {RenderLaminates}
        </table>
        </div>
    </div>
</div>
</div>

    </div>
    </>

)
}

export default Laminates;
