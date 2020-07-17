import {GET_USERS,GET_ERRORS} from "./types";
import axios from "axios";

export const getUsers = () => (dispatch) => {
    axios
        .get("/leaderboard")
        .then((response) => {
            dispatch({
                type : GET_USERS,
                payload : response.data
            })
        }).catch((err) => {
            console.log(err);
        })
}