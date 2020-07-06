import {createStore,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk";
import rootReducer from "./reducers";

//Initializing state object
const initialState = {};

//Inializing array of middlewares and adding thunk for async requests
const middlewares =[thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
)

export default store;