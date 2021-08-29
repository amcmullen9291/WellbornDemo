  
import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { setFinishList } from '../Actions/FinishActions';



function FinishesList(){

  const dispatch = useDispatch();

let [finishesList, setFinishesList ] = useState([
    //Cherry and Character Cherry
    {id: "1", nameOf: "AutumnSpice", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glaze: ""  },
    {id: "2", nameOf: "Blush", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glaze: ""  },
    {id: "3", nameOf: "Caramel", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glaze: ""  },
    {id: "4", nameOf: "Dark", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glaze: ""  },
    {id: "6", nameOf: "Espresso", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glaze: ""  },
    {id: "7", nameOf: "Gauntlet", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glaze: ""  },
    {id: "16", nameOf: "Shale", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glaze: ""  },
    {id: "17", nameOf: "Sienna", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glaze: ""  },
    {id: "18", nameOf: "Suede", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glaze: ""  },
    //cherry with glaze
    {id: "19", nameOf: "AutumnSpiceCharcoal", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glaze: "X"  },
    {id: "20", nameOf: "BlushCharcoal", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glaze: "X"  },
    {id: "21", nameOf: "BlushJava", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glaze: "X"  },
    {id: "22", nameOf: "DriftJava", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glaze: "X"  },
    {id: "23", nameOf: "DriftPewter", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glaze: "X"  },
    {id: "24", nameOf: "GauntletCharcoal", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glaze: "X"  },
    {id: "25", nameOf: "EvergreenJava", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glaze: "X"  },
    {id: "26", nameOf: "NutmegJava", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glaze: "X"  },
    {id: "27", nameOf: "ShadowCharcoal", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glaze: "X"  },
    {id: "28", nameOf: "ShadowPewter", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glaze: "X"  },
    {id: "29", nameOf: "NaturalSlate", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glaze: "X"  },
    {id: "30", nameOf: "NaturalJava", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "X", home_concepts: "", wellborn_closets: "", glaze: "X"  },
    {id: "31", nameOf: "GingerCharcoal", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glaze: "X"  },
    {id: "32", nameOf: "ShaleGranite", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glaze: "X"  },
    {id: "33", nameOf: "DarkChocoal", material: "Cherry", premium_series: "X", estate_series: "X", elegant_bath: "X", aspire: "X", select_series: "", home_concepts: "", wellborn_closets: "", glaze: "X"  },

 
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