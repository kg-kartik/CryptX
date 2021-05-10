import {
    SET_CURRENT_USER,
    SIGNIN_FAILED,
    SIGNIN_REQUEST,
    SIGNUP_FAILED,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESSFUL,
} from "../actions/types";
import isEmpty from "../validation/isEmpty";

const initialState = {
    loading: false,
    isAuthenticated: false,
    user: null,
    userDetails: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SIGNUP_SUCCESSFUL:
            return {
                ...state,
                loading: false,
            };
        case SIGNUP_FAILED:
            return {
                ...state,
                loading: false,
            };
        case SET_CURRENT_USER:
            return {
                ...state,
                loading: false,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload,
            };
        case SIGNIN_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SIGNIN_FAILED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
}
