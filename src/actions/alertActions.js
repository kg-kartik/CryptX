import {v4 as uuidv4} from "uuid";
import {SET_ALERT,REMOVE_ALERT} from "./types" 

const setAlert = (msg,alertType,timeout = 4000) => (dispatch) => {
    const id = uuidv4();
    dispatch({
        type : SET_ALERT,
        payload : { msg,alertType,id }
    })


    setTimeout(() => 
        dispatch({
            type : REMOVE_ALERT,
            payload : id
        }),timeout
    )
}

export default setAlert