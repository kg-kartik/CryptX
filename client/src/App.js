import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "./components/Home";
import SignUpNew from "./components/SignUpNew";
import SignInNew from "./components/SignInNew";
import LevelNew from "./components/LevelNew";
import Level from "./components/Level";
import Leaderboard from "./components/Leaderboard";
import Alert from "./layouts/Alert";

//Bring in Provider to access the global store
import { Provider } from "react-redux";

import store from "./store.js";

import setAuthToken from "./util/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import ProtectedRoute from "./commons/ProtectedRoute";
import PublicRoute from "./commons/PublicRoute";
import Team from "./components/Team";
import WW from "./components/WW";
import DOC from "./components/DOC";

// export const appHistory = createBrowserHistory();

//Checking if the user is already logged in or not
const jwtToken = localStorage.getItem("token");

if (jwtToken) {
  //Set authorization token header
  setAuthToken(jwtToken);

  //Decode the access token to get user info
  const decodedToken = jwt_decode(jwtToken);

  //Dispatch the token for seeting the user to be authenticated
  store.dispatch(setCurrentUser(decodedToken));

  //checking for any expiry date
  const currentTime = new Date() / 1000;
  if (decodedToken.exp < currentTime) {
    //Logout current User
    store.dispatch(logoutUser());
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Alert />
        <Switch>
          <PublicRoute restricted={false} exact path="/" component={Home} />
          <PublicRoute
            restricted={true}
            exact
            path="/signup"
            component={SignUpNew}
          />

          <PublicRoute
            restricted={true}
            exact
            path="/signin"
            component={SignInNew}
          />
          <PublicRoute
            restricted={false}
            exact
            path={`/${atob("QzEwSDE1Tg==")}`}
            component={WW}
          />
          <PublicRoute
            restricted={false}
            exact
            path={`/${atob("am9yZ2VkZWd1em1hbg==")}`}
            component={DOC}
          />
          <PublicRoute
            restricted={false}
            exact
            path="/leaderboard"
            component={Leaderboard}
          />
          <PublicRoute restricted={false} exact path="/team" component={Team} />
          <ProtectedRoute exact path="/level" component={LevelNew} />
          <ProtectedRoute exact path="/levelOld" component={Level} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
