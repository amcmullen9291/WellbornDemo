  
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { setFinishList } from '../Actions/FinishActions';



function FinishesList(){

  const dispatch = useDispatch();

let [finishesList, setFinishesList ] = useState([
    {id: "1", nameOf: "Autumn Spice", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "" },
    {id: "2", nameOf: "Blush", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "" },
    {id: "3", nameOf: "Caramel", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "" },
    {id: "4", nameOf: "Dark", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "" },
    {id: "5", nameOf: "Drift", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "" },
    {id: "6", nameOf: "Espresso", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "" },
    {id: "7", nameOf: "Gauntlet", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "" },
    {id: "8", nameOf: "Ginger", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "" },
    {id: "9", nameOf: "Light", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "" },
    {id: "10", nameOf: "", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "" },
    {id: "11", nameOf: "", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "" },
    {id: "12", nameOf: "", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "" },
    {id: "13", nameOf: "", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "" },
    {id: "14", nameOf: "", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "" },
    {id: "15", nameOf: "", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "" },
    {id: "16", nameOf: "", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "" },
    {id: "17", nameOf: "", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "" },
    {id: "18", nameOf: "", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "" },
    {id: "19", nameOf: "", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "" },
    {id: "20", nameOf: "", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "" },
    {id: "21", nameOf: "", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "" },

]);

const fetchFinishes = () => {
    dispatch(setFinishList(finishesList));
    console.log("Current listings:", finishesList)
  };
  
  useEffect(() => {
    fetchFinishes();
  }, []);
  

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


  export default connect(mapStateToProps, mapDispatchToProps)(FinishesList);