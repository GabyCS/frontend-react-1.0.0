import React, { Component } from 'react';
import './index.css';
import {connect} from "react-redux"
import { bindActionCreators } from 'redux';
import {Redirect } from 'react-router-dom';
import { getTareasFetchGen, crearTareaFetchGen } from '../../actions/tareasActions';
import { Grid, Row, Col, FormGroup, FieldGroup, ControlLabel, 
		FormControl, Form, Radio
		 } from 'react-bootstrap';
import { sessionService  } from 'redux-react-session';
import {API_URL, APP_URL} from '../../constants'; 


class FormTarea extends Component{
	constructor(props){
		super(props);
		this.state={
            nombre:'',
            tipo_duracion:'',
            minutos:'',
            horas:'',
            segundos:'',
            descripcion:'',
            tiempo_duracion:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.getValidationState = this.getValidationState.bind(this);
        this.submitFormulario = this.submitFormulario.bind(this);
        this.validaFormulario = this.validaFormulario.bind(this);

	}
	getValidationState(){
    }
	handleChange(e) {
		this.setState({
			[e.target.name]:e.target.value
		})
		this.setState({
			tiempo_duracion:this.state.horas+':'+this.state.minutos+':'+this.state.segundos,
		});
		this.setState({
			tiempo_restante:this.state.tiempo_duracion
		})
    }
    validaFormulario(callback){
    	let final_data={};
    	for (var i = 0; i < Object.keys(this.state).length; i++) {
    		var key = Object.keys(this.state)[i];
    		console.log(key);
    		if(key !== 'horas' && key !== 'minutos' && key !== 'segundos'){
    			console.log('entro al if', key);
    			final_data[key] = this.state[key];
    		}
    	}
    	callback(false, JSON.stringify(final_data));
    }
    submitFormulario(){
    	let vm = this;
    	this.props.changeSubmit();
    	this.validaFormulario(function(err, res) {
    		if(err){
    			console.log('faltan datos');
    		}else{

    			sessionService.loadUser()
    			.then((user) =>{
    				vm.props.actions.crearTareaFetchGen(res, user);
    			})
    			.catch((err) => {
    				window.location=APP_URL+'login';
    			})
    		}
    	})
    }
	render(){
		const {
           onHide,
           show,
         } = this.props;
		console.log(this);
		if(this.props.submit){
			this.submitFormulario();
		}
		if(this.props.crearTareaSuccess){
			console.log('success', this.props.crearTareaSuccess);
			this.props.onHide();
			var vm = this;
			sessionService.loadUser()
    			.then((user) =>{
    				vm.props.actions.getTareasFetchGen(user);
    			})
    			.catch((err) => {
    				window.location=APP_URL+'login';
    			})
		}
		return(
			<Row >
				<Col md={12} sm={12} xs={12}>
					<Form>
						<Col md={12} sm={12} xs={12} >
							<FormGroup
					            controlId="formBasicText"
					            validationState={this.getValidationState()}
					        >	
					            <ControlLabel>
					            	Resumen<span className="obligatorio">*</span>
					            </ControlLabel>
					                        
					            <FormControl
					                className="form-control"
					                type="text"
					                name="nombre"
					                value={this.state.nombre}
					                placeholder="Resumen"
					                onChange={this.handleChange}
					            />
					        </FormGroup>
						</Col>
						<Col md={12} sm={12} xs={12}>
							<ControlLabel>
								Tiempo de Duración<span className="obligatorio">*</span>
							</ControlLabel>
						</Col>
						<Col md={12} sm={12} xs={12}>
							<FormGroup
								controlId="formBasicText"
	                        	validationState={this.getValidationState()}
							>
	                    		<Radio
	                    			checked={this.state.tipo_duracion === 'corta'} 
	                    			value="corta"
	                    			onChange={this.handleChange}
	                    			name="tipo_duracion" inline
	                    		>
							        <b>Corta</b> <small>Max. 30min</small>
							    </Radio>{' '}
							    <Radio
							    	checked={this.state.tipo_duracion === 'media'}
							    	value="media"
							    	onChange={this.handleChange}
							    	name="tipo_duracion" inline
							    >

							        <b>Media</b> <small>Max. 1hr.</small>
							    </Radio>{' '}
							    <Radio 
							    	checked={this.state.tipo_duracion === 'larga'}
							    	value="larga"
							    	onChange={this.handleChange}
							    	name="tipo_duracion" inline
							    >
							       <b> Larga </b> <small>Max. 2hr.</small>
							    </Radio>
	                    	</FormGroup>
						</Col>
						<Col md={12} sm={12} xs={12}>
							Configura el tiempo manualmente. (Max. 2hr.) 
						</Col>
						<Col md={4} sm={4} xs={12}>
							<ControlLabel>Horas</ControlLabel>
							<FormControl
	                            className="form-control"
	                            type="text"
	                            name="horas"
	                            value={this.state.value}
	                            placeholder="Enter text"
	                            onChange={this.handleChange}
	                        />
						</Col>
						<Col md={4} sm={4} xs={12}>
							<ControlLabel>Minutos</ControlLabel>
							<FormControl
	                            className="form-control"
	                            type="text"
	                            value={this.state.value}
	                            name="minutos"
	                            placeholder="Enter text"
	                            onChange={this.handleChange}
	                        />
						</Col>
						<Col md={4} sm={4} xs={12}>
							<ControlLabel>Segundos</ControlLabel>
							<FormControl
	                            className="form-control"
	                            type="text"
	                            name="segundos"
	                            value={this.state.value}
	                            placeholder="Enter text"
	                            onChange={this.handleChange}
	                        />
						</Col>
						<Col md={12} sm={12} xs={12}>
							<ControlLabel>
								Descripción<span className="obligatorio">*</span>
							</ControlLabel>
							<FormControl
								name="descripcion"
								onChange={this.handleChange} 
								componentClass="textarea" 
								placeholder="textarea" />
						</Col>
					</Form>
				</Col>
			</Row>
			
		);
	}
}

const mapStateToProps = (state) =>{
  return{
    checked: state.sessionReducer.checked,
  	authenticated: state.sessionReducer.authenticated,
  	user: state.loginReducer.user,
  	crearTareaSuccess: state.tareasReducer.crearTareaSuccess
  }
}



const mapDispatchToProps = (dispatch)=>{
 return{
    actions:{
        crearTareaFetchGen: bindActionCreators((data,user)=>crearTareaFetchGen(data,user), dispatch),
        getTareasFetchGen:  bindActionCreators((data,user)=>getTareasFetchGen(data,user), dispatch)
        
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormTarea);

