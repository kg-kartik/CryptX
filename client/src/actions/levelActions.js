import {
    GET_CURRENT_LEVEL,
    REQUEST_UPDATE_LEVEL,
    REQUEST_UPDATE_LEVEL_FAILED,
    UPDATE_LEVEL,
} from "./types";
import axios from "axios";
import setAlert from "./alertActions";

const apiUrl = process.env.REACT_APP_API_URL;

export const getCurrentLevel = () => (dispatch) => {
    axios
        .get(`${apiUrl}/getCurrentLevel`)
        .then((response) => {
            dispatch({
                type: GET_CURRENT_LEVEL,
                payload: response.data,
            });
        })
        .catch((err) => {
            if (err.response) {
                dispatch(setAlert(err.response.data, "danger"));
            } else {
                dispatch(setAlert("There's a network error", "danger"));
            }
        });
};

export const updateLevel = (answer) => (dispatch) => {
    dispatch({
        type: REQUEST_UPDATE_LEVEL,
    });
    axios
        .post(`${apiUrl}/answer`, answer)
        .then((response) => {
            dispatch({
                type: UPDATE_LEVEL,
                payload: response.data,
            });
            dispatch(setAlert("Correct Answer", "success"));
        })
        .catch((err) => {
            dispatch({
                type: REQUEST_UPDATE_LEVEL_FAILED,
            });

            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach((error) => {
                    dispatch(setAlert(error.msg, "danger"));
                });
            } else if (err.response) {
                dispatch(setAlert(err.response.data, "danger"));
            } else {
                dispatch(setAlert("There's a network error", "danger"));
            }
        });
};
