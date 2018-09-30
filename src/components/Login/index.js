import React, { Component } from 'react';
import './index.css';
import {connect} from "react-redux"
import { bindActionCreators } from 'redux';
import {Redirect } from 'react-router-dom';
import { loginFetchGen } from '../../actions/loginActions';
import { FormGroup, 
        Button, 
        FieldGroup, 
        ControlLabel, 
        FormControl,
        Grid,
        Row,
        PageHeader,
        Col } from 'react-bootstrap';
const wellStyles = { maxWidth: 350, margin: '0 auto 10px', marginTop:'15%' };
const divStyles = {marginBottom:'30%'}
const User = (user)=>{
    return this.props.loginReducer.user
}
class Login extends Component {
	constructor(props){
        super(props);
        this.state = {
            user: ''
        };

        this.login=this.login.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    
    login(user){
        this.props.actions.loginFetchGen(user);
    }

    handleChange(e) {
        this.setState({ user: e.target.value });
    }
	render(){
        if(this.props.loginReducer.user){
            window.location="http://localhost:3000/"
        }
        return(

            <Grid className="well" style={wellStyles}>
                <Col sm={12} md={12} xs={12}>
                    <PageHeader className="text-center">
                    
                        Login
                       
                    </PageHeader>
                </Col>
                
                
                <Row>
                    <Col sm={12} xs={12} md={12} >
                         <FormGroup controlId="formSession">
                            <ControlLabel>Usuario</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.user}
                                placeholder="Usuario"
                                onChange={this.handleChange}
                            >
                            </FormControl>
                           
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col  sm={12} xs={12} md={12}  >
                        <Button 
                            bsStyle="primary"
                            
                            block
                            type="button" 
                            onClick={()=>this.login(this.state.user)}>
                                Iniciar Sesion
                            </Button>
                    </Col>
                </Row>
                <div style={divStyles}>
                </div>
            </Grid>
           

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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
