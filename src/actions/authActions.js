import {SET_CURRENT_USER,GET_ERRORS, GET_USER_DETAILS} from "./types";
import axios from "axios";
import setAuthToken from "../util/setAuthToken";
import jwt_decode from 'jwt-decode';

//Registering user
export const registerUser = (userData,history) => (dispatch) => {
    axios.post("http://localhost:5000/user/signup",userData)
    .then((response) => {
        history.push("/signin");
    })
    .catch((error) => {
        dispatch({
            type : GET_ERRORS,
            payload : error
        })
        console.log(error);
    })
}

//Login user
export const loginUser = (userData) => (dispatch) => {
    axios.post("http://localhost:5000/user/signin",userData)
    .then((response) => {
        //Saving the token to local storage
        const {token} = response.data;
        localStorage.setItem("token",token);

        //Setting token to Authorization header
        setAuthToken(token);

        //Decoding the access token to get user data
        const decodedToken = jwt_decode(token);

        //Passing the decoded token to the setCurrentUser function
        dispatch(setCurrentUser(decodedToken));
    })
    .catch((error) => {
        dispatch({
            type : GET_ERRORS,
            payload : error
        })
        console.log(error);
    })
}

//Setting currentUser
export const setCurrentUser = (decodedToken) => {
    return {
        type : SET_CURRENT_USER,
        payload : decodedToken
    }
}

//Get user details
export const getUserDetails = () => (dispatch) => {
    axios
        .get("http://localhost:5000/user/getDetails")
        .then((response) => {
            dispatch({
              type : GET_USER_DETAILS,
              payload : response.data  
            })
        }).catch((err) => {
            dispatch({
                type : GET_ERRORS,
                payload : err
            })
        })
}

//Logout user
export const logoutUser = () => dispatch => {
    //Remove the tokens from the localStorage
    localStorage.removeItem("token");
    
    //Delete the authorization header
    setAuthToken(false);

    //Not passing any token to setCurrentUser action
    dispatch(setCurrentUser({}));
}