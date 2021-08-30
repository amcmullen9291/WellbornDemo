import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { setFinishList } from '../Actions/FinishActions';
import Middlearea from './middlearea';

function Welcome() {

  const dispatch = useDispatch();

  let [finishesList, setFinishesList ] = useState([
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
      // Maple and Character Maple Stains
      {id: "34", nameOf: "Ash", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "35", nameOf: "Blush", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "36", nameOf: "Coffee", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "X", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "37", nameOf: "Cranberry", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "38", nameOf: "Natural", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "X", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "39", nameOf: "Espresso", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "40", nameOf: "Hazelnut", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "41", nameOf: "Oatmeal", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "42", nameOf: "Spiceberry", material: "Maple", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "X", home_concepts: "X", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "43", nameOf: "Sable", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "X", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
      {id: "44", nameOf: "Light", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "X", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
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
  //Maple with Paints
      {id: "59", nameOf: "Aqua", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "60", nameOf: "Bleu", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "61", nameOf: "BrightWhite", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "62", nameOf: "Dove", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "63", nameOf: "Sandstone", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "64", nameOf: "Mint", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "65", nameOf: "Sapphire", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
      {id: "66", nameOf: "Onyx", material: "Maple", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "X" },
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
  //Oak Stains
      {id: "81", nameOf: "", material: "Oak", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "", laminates: "", melamine:"", paints: "" },
  
  ]);
  
  const fetchFinishes = () => {
      dispatch(setFinishList(finishesList));
      console.log("Current listings:", finishesList)
    };
    
    useEffect(() => {
      fetchFinishes();
    }, []);
  
  return (
    <div>
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
                    <br/><br/><br/>
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
const mapStateToProps = (state) => {
  return {
    finishesList: state.finishesList
  }

}

const mapDispatchToProps = (dispatch) => {
  return{
    finishesList: (finishesList) => { dispatch({type: 'SET_FINISHES', finishesList})}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
