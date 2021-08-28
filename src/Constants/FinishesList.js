  
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { setFinishList } from '../Actions/FinishActions';



function FinishesList(){

  const dispatch = useDispatch();

let [finishesList, setFinishesList ] = useState([
    {id: "1", nameOf: "", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "", material: ""  },
    {id: "2", nameOf: "", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "", material: ""  },
    {id: "3", nameOf: "", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "", material: ""  },
    {id: "4", nameOf: "", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "", material: ""  },
    {id: "5", nameOf: "", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "", material: ""  },
    {id: "6", nameOf: "", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "", material: ""  },
    {id: "7", nameOf: "", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "", material: ""  },
    {id: "8", nameOf: "", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "", material: ""  },
    {id: "9", nameOf: "", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "", material: ""  },
    {id: "10", nameOf: "", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "", material: ""  },

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