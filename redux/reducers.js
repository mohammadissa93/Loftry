import {INCREES_CART} from './actions'

const initialState = {
    totalItems: 0,
}

function useReducer(state = initialState,action){
    switch (action.type){
        case INCREES_CART:
            return {...state,totalItems: action.payload};
        default:
            return state;
    }
}

export default useReducer;