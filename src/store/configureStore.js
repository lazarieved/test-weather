import {applyMiddleware, compose, createStore} from 'redux'
import cityWeather from "../reducers/reducer";
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
export const store = createStore(cityWeather, {}, composeEnhancers(
  applyMiddleware(thunk)
));
