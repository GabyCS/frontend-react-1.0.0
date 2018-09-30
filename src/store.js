import {createStore, combineReducers, applyMiddleware} from 'redux';
import { sessionReducer, sessionService  } from 'redux-react-session';
import logger from 'redux-logger';
import thunk from "redux-thunk";
import	promise from "redux-promise-middleware";
import loginReducer from "./reducers/loginReducer";

const store = createStore(
	
	combineReducers(
		{
			loginReducer,
			sessionReducer

		}
	), 
	{}, 
	applyMiddleware(logger, thunk , promise())
);
export default store;

sessionService.initSessionService(store, {driver:'COOKIES'});