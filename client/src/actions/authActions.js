import { SET_CURRENT_USER } from "./types";
import setAlert from "./alertActions";
import axios from "axios";
import setAuthToken from "../util/setAuthToken";
import jwt_decode from "jwt-decode";

//Registering user
export const registerUser = (userData, history) => dispatch => {
	axios
		.post("/user/signup", userData)
		.then(response => {
			dispatch(setAlert("Successfully Registered", "success"));
			history.push("/signin");
		})
		.catch(err => {
			const errors = err.response.data.errors;
			console.log(errors);

			if (errors) {
				errors.forEach(error => {
					dispatch(setAlert(error.msg, "danger"));
				});
			}
		});
};

//Login user
export const loginUser = userData => dispatch => {
	axios
		.post("/user/signin", userData)
		.then(response => {
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
		.catch(err => {
			dispatch(setAlert("Invalid Credentials", "danger"));
		});
};

//Setting currentUser
export const setCurrentUser = decodedToken => {
	return {
		type: SET_CURRENT_USER,
		payload: decodedToken
	};
};

//Logout user
export const logoutUser = () => dispatch => {
	//Remove the tokens from the localStorage
	localStorage.removeItem("token");

	//Delete the authorization header
	setAuthToken(false);

	//Not passing any token to setCurrentUser action
	dispatch(setCurrentUser({}));
};
