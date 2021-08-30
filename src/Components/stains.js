import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectedFinish } from '../Actions/FinishActions';

function Stains() {
    const [stainsList, setStainsList ] = useState([
        //Hickory Stains
     {id: "130", nameOf: "Ash", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "131", nameOf: "Blush", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "132", nameOf: "Caramel", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "133", nameOf: "Coffee", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "134", nameOf: "Cranberry", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "135", nameOf: "Dark", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "136", nameOf: "Drift", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "137", nameOf: "Espresso", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "138", nameOf: "Gauntlet", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },      
     {id: "139", nameOf: "Ginger", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },      

    ])
    const dispatch3 = useDispatch();
    const fetchGlazes = () => {
        dispatch3(selectedFinish(stainsList));
        console.log("Current listings:", stainsList)
      };
      
      useEffect(() => {
        fetchGlazes();
      }, []);

      if (Object.keys(stainsList).length > 0) {
        var RenderStains = stainsList.map(glaze => {
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
    <center><p id="blog">Glazes Page</p></center>
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
        {RenderStains}
        </table>
        </div>
    </div>
</div>
</div>

    </div>
    </>

)
}

export default Stains;
