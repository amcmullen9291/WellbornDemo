import { combineReducers } from 'redux';
import { FinishReducer, FinishListReducer, FilteredList } from './FinishReducer';


const RootReducer = combineReducers({
    Index: FinishListReducer,
    Finish: FinishReducer,
    Filter: FilteredList
});

export default RootReducer;