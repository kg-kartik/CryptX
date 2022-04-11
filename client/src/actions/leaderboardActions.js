import { GET_USERS } from "./types";
import axios from "axios";
import setAlert from "./alertActions";

export const getUsers = () => (dispatch) => {
    const deployedApiUrl = process.env.REACT_APP_API_URL;

    axios
        .get(`${deployedApiUrl}/getLevels`)
        .then((response) => {
            dispatch({
                type: GET_USERS,
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
