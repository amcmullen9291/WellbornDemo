import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectedFinish } from '../Actions/FinishActions';

function Melamine() {
    const [melamineList, setMelamineList ] = useState([
        //Melamine
     {id: "191", nameOf: "BiscottiCherry", material: "Melamine", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "192", nameOf: "ChicoryAlder", material: "Melamine", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "193", nameOf: "CinderAlder", material: "Melamine", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "194", nameOf: "HuskAlder", material: "Melamine", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "195", nameOf: "PlatinumAlder", material: "Melamine", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      

     //Heavy Texture Melamine
     {id: "196", nameOf: "CottonPine", material: "Heavy Texture Melamine", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "197", nameOf: "PuttyOak", material: "Heavy Texture Melamine", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "198", nameOf: "SmokeOak", material: "Heavy Texture Melamine", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "199", nameOf: "SnowOak", material: "Heavy Texture Melamine", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      
     {id: "200", nameOf: "ZincOak", material: "Heavy Texture Melamine", premium_series: "", estate_series: "", elegant_bath: "", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "X", melamine:"", paints: "" },      

    ])
    const dispatch3 = useDispatch();
    const fetchGlazes = () => {
        dispatch3(selectedFinish(melamineList));
        console.log("Current listings:", melamineList)
      };
      
      useEffect(() => {
        fetchGlazes();
      }, []);

      if (Object.keys(melamineList).length > 0) {
        var RenderMelamine = melamineList.map(glaze => {
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
    <center><p id="blog">Melamine Page</p></center>
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
        {RenderMelamine}
        </table>
        </div>
    </div>
</div>
</div>

    </div>
    </>

)
}

export default Melamine;
