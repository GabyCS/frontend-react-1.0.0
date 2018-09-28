import React, { Component } from 'react';
import './index.css';
import {connect} from "react-redux"
import { bindActionCreators } from 'redux';
import { loginFetchGen } from '../../actions/loginActions';
import { FormGroup, Button, FieldGroup } from 'react-bootstrap';

class FormSesion extends Component {
	constructor(props){
        super(props);
        this.login=this.login.bind(this);
    }
    
    login(user){
        this.props.actions.loginFetchGen(user);
    }

	render(){
		return(
			<div>
                <h1>{this.props.loginReducer.user}</h1>
                <p>
				<a   className="btn-princeso" onClick={()=>this.login('gabycs')} > Iniciar Sesion</a>
                </p>
			</div>
		);
	}
}
//con esta funcion se obtinene los datos del reducer no nesesariamente tiene que ser el reducer pueden ser de otros reducers

const mapStateToProps = (state) =>{
  return{
    loginReducer: state.loginReducer
  }
}


//esta funcion eja utilizar los actios

const mapDispatchToProps = (dispatch)=>{
 return{
    actions:{
        loginFetchGen: bindActionCreators((user)=>loginFetchGen(user), dispatch),
        
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSesion);
