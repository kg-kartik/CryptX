import {
    GET_CURRENT_LEVEL,
    REQUEST_UPDATE_LEVEL,
    REQUEST_UPDATE_LEVEL_FAILED,
    UPDATE_LEVEL,
} from "../actions/types";

const initialState = {
    levelDetails: {},
    isLoading: true,
    isUpdateLevelLoading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CURRENT_LEVEL:
            return {
                ...state,
                levelDetails: action.payload,
                isLoading: false,
                isUpdateLevelLoading: false,
            };
        case REQUEST_UPDATE_LEVEL:
            return {
                ...state,
                isLoading: false,
                isUpdateLevelLoading: true,
            };
        case UPDATE_LEVEL:
            return {
                ...state,
                levelDetails: action.payload,
                isLoading: false,
                isUpdateLevelLoading: false,
            };
        case REQUEST_UPDATE_LEVEL_FAILED:
            return {
                ...state,
                isLoading: false,
                isUpdateLevelLoading: false,
            };
        default:
            return state;
    }
}
