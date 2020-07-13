import {GET_USERS,GET_ERRORS} from "./types";
import axios from "axios";

export const getUsers = () => (dispatch) => {
    axios
        .get("http://localhost:5000/leaderboard")
        .then((response) => {
            dispatch({
                type : GET_USERS,
                payload : response.data
            })
        }).catch((err) => {
            dispatch({
                type : GET_ERRORS,
                payload : err
            })
        })
}