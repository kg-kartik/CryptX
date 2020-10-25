import { combineReducers } from "redux";
import authReducer from "./authReducer";
import levelReducer from "./levelReducer";
import leaderboardReducer from "./leaderboardReducer";
import alertReducer from "./alertReducer";

export default combineReducers({
	auth: authReducer,
	level: levelReducer,
	leaderboard: leaderboardReducer,
	alert: alertReducer
});
