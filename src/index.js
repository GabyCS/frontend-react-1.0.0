import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import App from './App.js';
import store from "./store";
import { sessionService, sessionStorage, loadSession  } from 'redux-react-session';

console.log();
function requireAuth() {
	console.log('user',store.getState().sessionReducer);
	
}
console.log('requireAuth', requireAuth());
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>, document.getElementById('root')
);


const mapStateToProps = (state) =>{
  return{
    loginReducer: state.loginReducer,
    sessionReducer: state.sessionReducer

  }
}

registerServiceWorker();
