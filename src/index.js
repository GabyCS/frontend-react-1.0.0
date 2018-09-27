import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import Overview from './containers/Overview';
import Footer from './components/Footer';
import Header from './components/Header';

ReactDOM.render(
	<Provider>
		<div>
			<Header />
			<BrowserRouter>
				<Switch>
					<Route exact path = '/' component={Overview} />
				</Switch>
			</BrowserRouter>
			<Footer />
		</div>
	</Provider>, document.getElementById('root')
);
registerServiceWorker();
