import { GET_USERS } from "./types";
import axios from "axios";
import setAlert from "./alertActions";

export const getUsers = () => (dispatch) => {
    const apiUrl = process.env.REACT_APP_API_URL;

    axios
        .get(`${apiUrl}/getLevels`)
        .then((response) => {
            dispatch({
                type: GET_USERS,
                payload: response.data,
            });
        })
        .catch((err) => {
            dispatch(setAlert("Error fetching data", "danger"));
        });
};
