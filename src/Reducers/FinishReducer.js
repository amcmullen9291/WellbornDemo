import { ActionTypes } from '../Constants/Action.type';

const initialState = {
    FinishesList: [],
};

export const FinishListReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_FINISHES:
            return { ...state, FinishesList: payload};
        default:
            return state
    }
};

export const FinishReducer = (state={}, {type, payload}) => {
    switch (type) {
        case ActionTypes.SELECTED_FINISH:
            return { ...state, ...payload};
        default:
            return state;
    }
}