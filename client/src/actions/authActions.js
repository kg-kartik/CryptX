import {
    SET_CURRENT_USER,
    SIGNUP_REQUEST,
    SIGNUP_FAILED,
    SIGNUP_SUCCESSFUL,
    SIGNIN_REQUEST,
    SIGNIN_FAILED,
} from "./types";
import setAlert from "./alertActions";
import axios from "axios";
import setAuthToken from "../util/setAuthToken";
import jwt_decode from "jwt-decode";

//Registering user
const apiUrl = process.env.REACT_APP_API_URL;

export const registerUser = (userData, history) => (dispatch) => {
    dispatch({
        type: SIGNUP_REQUEST,
    });

    axios
        .post(`${apiUrl}/user/signup`, userData)
        .then((response) => {
            dispatch({
                type: SIGNUP_SUCCESSFUL,
            });
            dispatch(
                setAlert(
                    "Successfully Registered.Please verify your email(also check your spam folder)",
                    "success"
                )
            );
            history.push("/signin");
        })
        .catch((err) => {
            const errors = err.response.data.errors;
            dispatch({
                type: SIGNUP_FAILED,
            });
            if (errors) {
                errors.forEach((error) => {
                    dispatch(setAlert(error.msg, "danger"));
                });
            }
        });
};

//Login user
export const loginUser = (userData) => (dispatch) => {
    dispatch({
        type: SIGNIN_REQUEST,
    });
    axios
        .post(`${apiUrl}/user/signin`, userData)
        .then((response) => {
            //Saving the token to local storage
            const { token } = response.data;
            localStorage.setItem("token", token);

            //Setting token to Authorization header
            setAuthToken(token);

            //Decoding the access token to get user data
            const decodedToken = jwt_decode(token);

            //Passing the decoded token to the setCurrentUser function
            dispatch(setCurrentUser(decodedToken));
            dispatch(setAlert("Successfully LoggedIn", "success"));
        })
        .catch((err) => {
            dispatch({
                type: SIGNIN_FAILED,
            });
            const errors = err.response.data.errors;
            if (errors) {
                errors.forEach((error) => {
                    dispatch(setAlert(error.msg, "danger"));
                });
            }
        });
};

//Setting currentUser
export const setCurrentUser = (decodedToken) => {
    return {
        type: SET_CURRENT_USER,
        payload: decodedToken,
    };
};

//Logout user
export const logoutUser = () => (dispatch) => {
    //Remove the tokens from the localStorage
    localStorage.removeItem("token");

    //Delete the authorization header
    setAuthToken(false);

    //Not passing any token to setCurrentUser action
    dispatch(setCurrentUser({}));
};
