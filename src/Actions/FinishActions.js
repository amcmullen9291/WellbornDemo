import { ActionTypes } from '../Constants/Action.type';

export const setFinishList = (list) => {
    return {
        type: ActionTypes.SET_FINISHES,
        payload: list
    }
}

export const selectedFinish = (stadium) => {
    return {
        type: ActionTypes.SELECTED_FINISH,
        payload: stadium
    }
}