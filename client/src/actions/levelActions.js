import { GET_CURRENT_LEVEL, UPDATE_LEVEL } from "./types";
import axios from "axios";
import setAlert from "./alertActions";

export const getCurrentLevel = () => dispatch => {
	axios
		.get("/getCurrentLevel")
		.then(response => {
			dispatch({
				type: GET_CURRENT_LEVEL,
				payload: response.data
			});
		})
		.catch(err => {
			console.log(err);
		});
};

export const updateLevel = answer => dispatch => {
	axios
		.post("http://localhost:5000/answer", answer)
		.then(response => {
			dispatch({
				type: UPDATE_LEVEL,
				payload: response.data
			});
			dispatch(setAlert("Correct Answer", "success"));
		})
		.catch(err => {
			dispatch(setAlert("Incorrect answer", "danger"));
		});
};
