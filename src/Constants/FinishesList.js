  
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { setFinishList } from '../Actions/FinishActions';



function FinishesList(){

  const dispatch = useDispatch();

let [finishesList, setFinishesList ] = useState([
    {id: "1", nameOf: "a", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "", material: ""  },
    {id: "2", nameOf: "s", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "", material: ""  },
    {id: "3", nameOf: "d", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "", material: ""  },
    {id: "4", nameOf: "r", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "", material: ""  },
    {id: "5", nameOf: "g", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "", material: ""  },
    {id: "6", nameOf: "i", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "", material: ""  },
    {id: "7", nameOf: "p", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "", material: ""  },
    {id: "8", nameOf: "w", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "", material: ""  },
    {id: "9", nameOf: "qq", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "", material: ""  },
    {id: "10", nameOf: "b", material: "", premium_series: "", estate_series: "", elegant_bath: "", aspire: "", select_series: "", home_concepts: "", wellborn_closets: "", material: ""  },

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