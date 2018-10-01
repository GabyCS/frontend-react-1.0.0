import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Grid from 'bootstrap-grid-react';
import { Button, Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter,Redirect } from 'react-router-dom';
import { logoutFetchGen } from '../../actions/loginActions';
import './index.css';
import {API_URL, APP_URL} from '../../constants'; 

class Header extends Component {
	constructor(props){
		super(props);
		this.logout=this.logout.bind(this);
	}
	logout(){
		this.props.actions.logoutFetchGen();
	}
	render(){
		if((this.props.checked && !this.props.authenticated && this.props.user)){
			window.location=APP_URL+'login';
		}
		return(
				<Navbar inverse collapseOnSelect brand="React-Bootstrap">
					<Navbar.Header>
						<Navbar.Brand>
							<a href="/"> Abraxas-Tareas</a>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					{this.props.authenticated  && <Navbar.Collapse>
						<Nav>
							<NavItem eventKey={1} onClick={this.logout}>
								Logout
							</NavItem>
						</Nav>
					</Navbar.Collapse>}
				</Navbar>
		);
	}
}


const mapState = (state) => ({
  checked: state.sessionReducer.checked,
  authenticated: state.sessionReducer.authenticated,
  user: state.loginReducer.user
});

const mapDispatchToProps = (dispatch)=>{
 return{
    actions:{
        logoutFetchGen: bindActionCreators((user)=>logoutFetchGen(user), dispatch),
        
    }
  }
}

export default connect(mapState, mapDispatchToProps)(Header);