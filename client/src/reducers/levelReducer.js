import {GET_CURRENT_LEVEL,UPDATE_LEVEL} from "../actions/types";

const initialState = {
    levelDetails : {},
    isLoading : true
}

export default function(state=initialState,action) {
    switch(action.type) {
        case GET_CURRENT_LEVEL : 
            return {
                ...state,
                levelDetails : action.payload,
                isLoading : false
            }
        case UPDATE_LEVEL : 
            return {
                ...state,
                levelDetails : action.payload,
                isLoading : false
            }
        default : 
            return state
    }
}
