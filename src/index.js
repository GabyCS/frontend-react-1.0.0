import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import Overview from './containers/Overview';
import Header from './components/Header';
import FormLogin from './components/FormLogin';
import store from "./store";
console.log(this.props);
ReactDOM.render(
	<Provider store={store}>
		<div>
			<Header />
			<BrowserRouter>
				<Switch>
					<Route exact path = '/' component={(!true)?FormLogin:''} />
				</Switch>
			</BrowserRouter>
		</div>
	</Provider>, document.getElementById('root')
);

registerServiceWorker();
