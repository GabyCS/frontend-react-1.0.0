import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect, PrivateRoute } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Overview from './containers/Overview';
import Header from './components/Header';
import Login from './components/Login';


const App = ({authenticated, checked}) => (
    
      
      <div>
        <Header />
        <BrowserRouter >
           {checked && 
            <Switch>
              <Route exact path = '/' render={() => (
                authenticated ? (
                  <Overview/>
                ) : (
                  <Redirect to="/login"/>
                )
              )}   />
              <Route exact path = '/login' component={Login} />
              <Route exact  path = '/tareas' component={Overview} render={() => (
                authenticated ? (
                  <Overview/>
                ) : (
                  <Redirect to="/login"/>
                )
              )} />
            </Switch> }
      </BrowserRouter> 
    </div>
)

const  bool  = PropTypes;

App.propType ={
  authenticated: bool.isRequired,
  checked: bool.isRequired
}

const mapState = ({ sessionReducer }) => ({
  checked: sessionReducer.checked,
  authenticated: sessionReducer.authenticated
});

export default connect(mapState)(App);