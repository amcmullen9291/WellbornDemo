import { combineReducers } from 'redux';
import { FinishReducer, FinishListReducer } from './FinishReducer';


const RootReducer = combineReducers({
    Index: FinishListReducer,
    Finish: FinishReducer
});

export default RootReducer;