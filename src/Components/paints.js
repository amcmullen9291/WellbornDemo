import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectedFinish } from '../Actions/FinishActions';
import Swal from 'sweetalert2';

function Paints() {
    const [Finish, setFinish ] = useState([
        //MDF Paints
     {id: "153", nameOf: "Mint", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "154", nameOf: "Olive", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "155", nameOf: "Onyx", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "156", nameOf: "OysterWhite", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "157", nameOf: "Pebble", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "158", nameOf: "Sandstone", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "159", nameOf: "Willow", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "160", nameOf: "Aqua", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "161", nameOf: "Bleu", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "162", nameOf: "BrightWhite", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
  
     {id: "163", nameOf: "AquaGranite", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "164", nameOf: "AquaJava", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "165", nameOf: "BleuJava", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "166", nameOf: "BrightWhiteJava", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "167", nameOf: "CremeMocha", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "168", nameOf: "CremeSlate", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "169", nameOf: "DivinityJava", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "170", nameOf: "DoveJava", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "171", nameOf: "DovePewter", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "172", nameOf: "GrayMistGranite", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "173", nameOf: "GrayMistJava", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "174", nameOf: "MinkGrayGranite", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "175", nameOf: "MinkGrayJava", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "176", nameOf: "MintGranite", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "177", nameOf: "MintJava", material: "MDF", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
      //Oak Paints
      {id: "103", nameOf: "Aqua", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "104", nameOf: "Blue", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "105", nameOf: "BrightWhite", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "106", nameOf: "Creme", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "107", nameOf: "Divinity", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "108", nameOf: "Dove", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "109", nameOf: "Glacier", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "110", nameOf: "GrayMist", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "111", nameOf: "MinkGray", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "112", nameOf: "Mint", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "113", nameOf: "Olive", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "114", nameOf: "Onyx", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "115", nameOf: "OysterWhite", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "116", nameOf: "Pebble", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "117", nameOf: "Sandstone", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "118", nameOf: "Sapphire", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "119", nameOf: "Willow", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },      
  //Maple with Paints
  {id: "59", nameOf: "Aqua", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
  {id: "60", nameOf: "Bleu", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
  {id: "61", nameOf: "BrightWhite", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
  {id: "62", nameOf: "Dove", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
  {id: "63", nameOf: "Sandstone", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
  {id: "64", nameOf: "Mint", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
  {id: "65", nameOf: "Sapphire", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
  {id: "66", nameOf: "Onyx", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },

    ])
    const dispatch5 = useDispatch();
    const fetchPaints = () => {
        dispatch5(selectedFinish(Finish));
        console.log("Current listings:", Finish)
      };
      
      useEffect(() => {
        fetchPaints();
      }, []);
      const count = Finish.length;

      function SortByMaterial(e, wood){
        e.preventDefault();
        const newList = Finish.filter(finish => finish.material == wood);
        console.log("type:", wood);
        console.log("New List:", newList);
        dispatch5(selectedFinish(newList));
        Finish = useState((state) => state.newList);
        console.log("update:", Finish)

      }

      function finishPicture(e, src){
        e.preventDefault();
        const img_src = src+".jpg";
        Swal.fire({
          title: src,
          text: "",
          imageUrl: `${process.env.PUBLIC_URL}/CabinetFinishes/Paints/${img_src}`,
          imageWidth: 400,
          imageHeight: 400,
          imageAlt: src,
        })
      }
      

      if (Object.keys(Finish).length > 0) {
        var RenderPaints = Finish.map(paint => {
          const {id, nameOf, material, premium_series, aspire, estate_series, elegant_bath, select_series, home_concepts } = paint;
          return (
            <>
            <th>
            </th>
          <tr key={id}>
            <td className="rowcss"><a href="#" onClick={(e) => finishPicture(e, `${nameOf}`)}>{nameOf}</a></td><td className="tableSpacer"></td><td className="FinishMaterial">{material}</td><td className="tableSpacer"></td><td className="FinishSeries">{premium_series}</td><td className="FinishSeries">{estate_series}</td><td className="FinishSeries">{elegant_bath}</td><td className="FinishSeries">{aspire}</td><td className="FinishSeries">{home_concepts}</td><td className="FinishSeries">{select_series}</td>
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
    <center><p id="blog">Paints Page ({count} now showing)</p></center>
    <div id="tableborder">
    <div id= "selectedFinish">
    <table>
        <tr className="header">
          <th>Finish</th>
          <th></th>
          <th >Material</th>
          <th></th>
          <th colSpan="6">Product Line</th>
        </tr>
        <tr><td></td><td></td><td></td><td></td><td>PremiumSeries</td><td>EstateSeries</td><td>ElegantBath</td><td>Aspire</td><td>HomeConcepts</td><td>SelectSeries</td></tr>
        {RenderPaints}
        </table>
        </div>
    </div>
    <center><div>
      <hr/>
  <button className="sortButtons" name="Oak" onClick={(e) => SortByMaterial(e, "Oak")}>Oak</button>
  <button className="sortButtons" name="Hickory" onClick={(e) => SortByMaterial(e, "MDF")}>MDF</button>
  <button className="sortButtons" name="Cherry" onClick={(e) => SortByMaterial(e, "Maple")}>Maple</button><br/>
  <button>Reset Options</button>
</div></center>
</div>
</div>

    </div>
    </>

)
}

export default Paints;
