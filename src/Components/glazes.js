import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectedFinish } from '../Actions/FinishActions';

function Glazes() {
    const [glazesList, setGlazesList ] = useState([
    //Cherry Stains with Glaze
    {id: "19", nameOf: "AutumnSpiceCharcoal", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "20", nameOf: "BlushCharcoal", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "21", nameOf: "BlushJava", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "22", nameOf: "DriftJava", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "23", nameOf: "DriftPewter", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "24", nameOf: "GauntletCharcoal", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "25", nameOf: "EvergreenJava", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "26", nameOf: "NutmegJava", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "27", nameOf: "ShadowCharcoal", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "28", nameOf: "ShadowPewter", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "29", nameOf: "NaturalSlate", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "30", nameOf: "NaturalJava", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "31", nameOf: "GingerCharcoal", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "32", nameOf: "ShaleGranite", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "33", nameOf: "DarkChocoal", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    //Maple Stains with Glaze
    {id: "45", nameOf: "AshCharcoal", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "46", nameOf: "BlushCharcoal", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "47", nameOf: "CaramelJava", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "48", nameOf: "EvergreenJava", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "49", nameOf: "CranberryCharcoal", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "50", nameOf: "GauntletCharcoal", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "51", nameOf: "DriftSlate", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "52", nameOf: "SableCharcoal", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "53", nameOf: "OatmealCharcoal", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "54", nameOf: "ShaleMocha", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "55", nameOf: "OatmealJava", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "56", nameOf: "SiennaCharcoal", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "57", nameOf: "HoneyJava", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
    {id: "58", nameOf: "NaturalSlate", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },
//Maple Paints with Glaze
{id: "67", nameOf: "AquaGranite", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
{id: "68", nameOf: "AquaJava", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
{id: "69", nameOf: "MinkGrayGranite", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
{id: "70", nameOf: "DoveSlate", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
{id: "71", nameOf: "GlacierJava", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
{id: "72", nameOf: "MintGranite", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
{id: "73", nameOf: "PebblePewter", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
{id: "74", nameOf: "OliveMocha", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
{id: "75", nameOf: "PebbleJava", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
{id: "76", nameOf: "WillowJava", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
{id: "77", nameOf: "SapphireJava", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
{id: "78", nameOf: "DivinityJava", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
{id: "79", nameOf: "OlivePewter", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
{id: "80", nameOf: "GrayMistGranite", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },
      //Oak Paints with Glaze
      {id: "120", nameOf: "OliveMocha", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "121", nameOf: "OlivePewter", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "122", nameOf: "OysterWhiteGranite", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "123", nameOf: "OysterWhiteJava", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "124", nameOf: "PebbleJava", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "125", nameOf: "PebblePewter", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
      {id: "126", nameOf: "SandstonePewter", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "127", nameOf: "SandstoneSlate", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "128", nameOf: "SapphireGranite", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
     {id: "129", nameOf: "DoveSlate", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "", laminates: "", melamine:"", paints: "X" },      
//Hickory Stains with Glaze
{id: "140", nameOf: "EvergreenJava", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
{id: "141", nameOf: "GauntletCharcoal", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
{id: "142", nameOf: "GauntletJava", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
{id: "143", nameOf: "GingerCharcoal", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
{id: "144", nameOf: "GingerJava", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
{id: "145", nameOf: "HazelCharcoal", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
{id: "146", nameOf: "HoneyJava", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
{id: "147", nameOf: "LightJava", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
{id: "148", nameOf: "LightSlate", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
{id: "149", nameOf: "NaturalSlate", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
{id: "150", nameOf: "ShaleMocha", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
{id: "151", nameOf: "SiennaCharcoal", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      
{id: "152", nameOf: "SuedeCharcoal", material: "Hickory", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "X", stains: "X", laminates: "", melamine:"", paints: "" },      

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
