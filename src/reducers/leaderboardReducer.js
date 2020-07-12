import {GET_USERS} from "../actions/types";

const initialState = {
    users : []
}

export default function(state = initialState,action) {
    console.log(state,"hello state");
    switch(action.type) {
        case GET_USERS:
            return {
                ...state,
                users : action.payload
            }
        default : 
            return state;
    }
}