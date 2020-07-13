import {SET_CURRENT_USER,GET_USER_DETAILS,GET_USERS} from "../actions/types";
import isEmpty from "../validation/isEmpty"

const initialState= {
    isAuthenticated : false,
    user : {},
    userDetails : {}
}

export default function(state = initialState,action) {
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated : !isEmpty(action.payload),
                user : action.payload
            }
        case GET_USER_DETAILS :
            return {
                ...state,
                isAuthenticated : !isEmpty(action.payload),
                userDetails : action.payload
            }
        default : 
            return state;
    }
}