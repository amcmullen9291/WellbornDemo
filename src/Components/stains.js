import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { selectedFinish, filteredList } from '../Actions/FinishActions';
import Swal from 'sweetalert2';

function Stains() {
    let [Finish, setFinish ] = useState([
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
  //Oak Stains
  {id: "81", nameOf: "Blush", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
  {id: "82", nameOf: "Caramel", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
  {id: "83", nameOf: "Shadow", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
  {id: "84", nameOf: "Sable", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "X", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
  {id: "85", nameOf: "Spiceberry", material: "Oak", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
  {id: "86", nameOf: "Hazelnut", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
  {id: "87", nameOf: "Gauntlet", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
  {id: "88", nameOf: "Shale", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
  {id: "89", nameOf: "Dark", material: "Oak", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glazes: "", stains: "X", laminates: "", melamine:"", paints: "" },
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
    const dispatch3 = useDispatch();
    const fetchStains = () => {
        dispatch3(selectedFinish(Finish));
        console.log("Current listings:", Finish)
      };
      
      useEffect(() => {
        fetchStains();
      }, []);
            const count = Finish.length;

      function SortByMaterial(e, wood){
        e.preventDefault();
        let newList = Finish.filter(finish => finish.material == wood);
        console.log("type:", wood);
        console.log("New List:", newList);
        dispatch3(filteredList(newList));
        Finish = newList;
        console.log("update:", Finish)
}

var newList = [];
if(Object.keys(newList).length>0){
  dispatch3(selectedFinish(newList));
  Finish = newList;
}

function finishPicture(e, src){
  e.preventDefault();
  const img_src = src+".jpg";
  Swal.fire({
    title: src,
    text: "",
    imageUrl: `${process.env.PUBLIC_URL}/CabinetFinishes/Stains/${img_src}`,
    imageWidth: 400,
    imageHeight: 400,
    imageAlt: src,
  })
}

      if (Object.keys(Finish).length > 0) {
        var RenderStains = Finish.map(stain => {
          const {id, nameOf, material, premium_series, aspire, estate_series, elegant_bath, select_series, home_concepts } = stain;
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
    <center><p id="blog">Stains Page ({count} now showing)</p></center>
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
        <tr id="tabletops"><td></td><td></td><td></td><td></td><td>PremiumSeries</td><td>EstateSeries</td><td>ElegantBath</td><td>Aspire</td><td>HomeConcepts</td><td>SelectSeries</td></tr>
        {RenderStains}
        </table>
        </div>
    </div>
    <center><div>
      <hr/>
  <button className="sortButtons" name="Oak" onClick={(e) => SortByMaterial(e, "Oak")}>Oak</button>
  <button className="sortButtons" name="Hickory" onClick={(e) => SortByMaterial(e, "Hickory")}>Hickory</button>
  <button className="sortButtons" name="Cherry" onClick={(e) => SortByMaterial(e, "Cherry")}>Cherry</button><br/>

  <button>Reset Options</button>
</div></center>
</div>
</div>

    </div>
    </>

)
}
const mapStateToProps = (state) => {
  console.log("The state has been changed.");
  return {
    Finish: state.Finish
  }

}

const mapDispatchToProps = (dispatch) => {
  return{
    Finish: (Finish) => { dispatch({type: 'SELECTED_FINISH', Finish})}
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Stains);
