import { ActionTypes } from '../Constants/Action.type';

export const setFinishList = (list) => {
    return {
        type: ActionTypes.SET_FINISHES,
        payload: list
    }
}

export const selectedFinish = (finish) => {
    return {
        type: ActionTypes.SELECTED_FINISH,
        payload: finish
    }
}
//experimental filter action 
export const filteredList = (filter) => {
    return {
        type: ActionTypes.FILTERED_LIST,
        payload: filter
    }
}

