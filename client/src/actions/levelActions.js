import { GET_CURRENT_LEVEL, UPDATE_LEVEL } from "./types";
import axios from "axios";
import setAlert from "./alertActions";

export const getCurrentLevel = () => (dispatch) => {
    const apiUrl = process.env.REACT_APP_API_URL;
    axios
        .get(`${apiUrl}/getCurrentLevel`)
        .then((response) => {
            dispatch({
                type: GET_CURRENT_LEVEL,
                payload: response.data,
            });
        })
        .catch((err) => {
            dispatch(setAlert("Error fetching data", "danger"));
        });
};

export const updateLevel = (answer) => (dispatch) => {
    axios
        .post("/answer", answer)
        .then((response) => {
            dispatch({
                type: UPDATE_LEVEL,
                payload: response.data,
            });
            dispatch(setAlert("Correct Answer", "success"));
        })
        .catch((err) => {
            dispatch(setAlert("Incorrect answer", "danger"));
        });
};
