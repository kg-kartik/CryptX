import React from "react"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Level from "./components/Level";
import Leaderboard from "./components/Leaderboard";

//Bring in Provider to access the global store
import {Provider} from "react-redux"

import store from "./store.js";

import setAuthToken from "./util/setAuthToken"
import jwt_decode from "jwt-decode";
import {setCurrentUser,logoutUser} from "./actions/authActions";
import ProtectedRoute from "./commons/ProtectedRoute"
import Home from "./components/Home"
// export const appHistory = createBrowserHistory();

//Checking if the user is already logged in or not
const jwtToken = localStorage.getItem("token");

if(jwtToken) {
    
    //Set authorization token header
    setAuthToken(jwtToken);

    //Decode the access token to get user info
    const decodedToken = jwt_decode(jwtToken);

    //Dispatch the token for seeting the user to be authenticated
    store.dispatch(setCurrentUser(decodedToken));


    //checking for any expiry date
    const currentTime = new Date()/1000;
    if(decodedToken.exp < currentTime) {
        //Logout current User
        store.dispatch(logoutUser());
        console.log("User has been logged out");
    }
}


const App = () => {

    return (
        <Provider store={store}>
            <Router>
                <Switch>
                  <Route exact path ="/home" component = {Home} /> 
                  <Route exact path ="/signup" component = {SignUp} />
                  <Route exact path="/signin" component = {SignIn} />
                  <ProtectedRoute exact path = "/level" component = {Level} />
                  <Route exact path = "/leaderboard" component = {Leaderboard} />
                </Switch>
            </Router>
        </Provider>
    )
}

export default App