import React, { Component } from 'react';
import './index.css';
import {connect} from "react-redux"
import { bindActionCreators } from 'redux';
import {Redirect } from 'react-router-dom';
import { getTareasFetchGen } from '../../actions/tareasActions';
import { Modal,Button, Grid, Col
		 } from 'react-bootstrap';
import { sessionService  } from 'redux-react-session';
import FormTarea from '../FormTarea';
const styleButton = {fontSize:'18px'};
class ModalCrearTarea extends Component{
	constructor(props){
		super(props);
		this.state={
			datosForm:'ejemplo',
			submit:false
		}
		this.submitForm = this.submitForm.bind(this);
		this.changeSubmit = this.changeSubmit.bind(this);
	}
	submitForm(){
		this.setState({
			submit:true
		})
	}
	changeSubmit(){
		this.setState({
			submit:false,
		})
	}
	render(){
		if(this.props.crearTareaFetch){
			this.setState({
				submit:false
			})
		}
		return(

			<Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
				<Modal.Header>
					<Modal.Title id="contained-modal-title-lg">
						CREAR TAREA {this.state.datosForm}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<FormTarea submit={this.state.submit} changeSubmit={this.changeSubmit} onHide={this.props.onHide} />
				</Modal.Body>
				<Modal.Footer>
					<Button  bsStyle="primary" onClick={this.submitForm}>
						Crear
					</Button>
					<Button onClick={this.props.onHide} bsStyle="link">
						Cancelar
					</Button>
				</Modal.Footer>
			</Modal>
		)
	}

}

export default ModalCrearTarea;

