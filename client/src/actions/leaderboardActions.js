import { GET_USERS } from "./types";
import axios from "axios";

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
            console.log(err);
        });
};
