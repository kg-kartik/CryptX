import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import logger from "redux-logger";

// Initial state as an empty object
const initalState = {}
// Adding thunnk middleware for async requests
const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
	rootReducer,
	initalState,
	composeEnhancers(applyMiddleware(...middleware))
)
export default store