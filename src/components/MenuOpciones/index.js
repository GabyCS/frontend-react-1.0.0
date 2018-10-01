import React, { Component } from 'react';
import './index.css';
import {connect} from "react-redux"
import { bindActionCreators } from 'redux';
import {Redirect } from 'react-router-dom';
import { getTareasFetchGen } from '../../actions/tareasActions';
import { Row,
		 Col,
		 Button,
		 Glyphicon } from 'react-bootstrap';
import { sessionService  } from 'redux-react-session';
import ModalCrearTarea from '../ModalCrearTarea';
const styleButton = {fontSize:'18px'};
class MenuOpciones extends Component{
	constructor(props, context){
		super(props, context);
		this.state = {
			show:false
		}
		this.abrirModal = this.abrirModal.bind(this);
		this.cerrarModal = this.cerrarModal.bind(this);
	}

	abrirModal(){
		this.setState({show:true});
	}

	cerrarModal(){
		this.setState({show:false});
	}

	render(){
		return(
			<div>
				<Button bsStyle="link" style={styleButton} onClick={() => {this.setState({show:true})}}>
			        <Glyphicon glyph="plus" />
			    </Button>
			    <Button bsStyle="link" style={styleButton}>
			        <Glyphicon glyph="filter" />
			    </Button>
				
			    <ModalCrearTarea show={this.state.show} onHide={this.cerrarModal} />
			</div>
		)
	}

}

export default MenuOpciones;