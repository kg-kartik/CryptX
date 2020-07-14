import {GET_CURRENT_LEVEL,UPDATE_LEVEL} from "./types";
import axios from "axios";

export const getCurrentLevel = () => (dispatch) => {
    axios
    .get("http://localhost:5000/getCurrentLevel")
    .then((response) => {
        dispatch({
            type : GET_CURRENT_LEVEL,
            payload : response.data
        })
    }).catch((err) => {
        console.log(err);
    })
} 

export const updateLevel = (answer) => (dispatch) => {
    
    axios
    .post("http://localhost:5000/answer",answer
    )
    .then((response) => {
        dispatch({
            type : UPDATE_LEVEL,
            payload : response.data.atLevel
        })
    }).catch((err) => {
        console.log(err);
    })
}