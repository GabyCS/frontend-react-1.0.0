import React, { Component } from 'react';
import './index.css';
import {connect} from "react-redux"
import { bindActionCreators } from 'redux';
import {Redirect } from 'react-router-dom';
import { getTareasFetchGen } from '../../actions/tareasActions';
import { ListGroup,
		 ListGroupItem,
		 Row,
		 Col } from 'react-bootstrap';
import { sessionService  } from 'redux-react-session';


class ListadoTareas extends Component{
	constructor(props){
		super(props)
		this.state = {
			arrayTareas:false
		}
		this.obtenerListadoTareas = this.obtenerListadoTareas.bind(props);
		this.renderList = this.renderList.bind(props);
		this.abrirModalDesc = this.abrirModalDesc.bind(this);
		
	}

	obtenerListadoTareas(user){
		this.actions.getTareasFetchGen(user);
	}
	abrirModalDesc (tarea) {
		console.log(tarea);
	}
	componentDidMount(){
		let vm = this;
		sessionService.loadUser()
		.then((usuario) =>{
			vm.obtenerListadoTareas(usuario);
		})
		.catch((err) =>{
			console.log(err);
		})
	}
	renderList(elements,tareas){
		let listado = tareas.tareas;
		let renderListado = listado.map((tarea, index) => {
			//let titulo = {tarea.nombre+' <small>tarea._id</small>'}
			return <ListGroupItem key={index} onClick={ (e) =>console.log(tarea)}>
						<Row>
							<Col md={10}>
								{tarea.nombre} - {tarea.descripcion}
							</Col>

						</Row>
				</ListGroupItem>;
		})
		return renderListado;
	}

	render(){
		if(this.props.listado_tareas){
			const arrayTareas = this.props.listado_tareas.tareas;
			// this.setState({
			// 	arrayTareas:arrayTareas
			// })
		}
		return(
			<ListGroup>
				{this.props.listado_tareas ? this.renderList(this, this.props.listado_tareas) :'No existen tareas' }
			</ListGroup> 
		);
	};
}


const mapStateToProps = (state) =>{
  return{
    checked: state.sessionReducer.checked,
  	authenticated: state.sessionReducer.authenticated,
  	user: state.loginReducer.user,
  	listado_tareas: state.tareasReducer.listado_tareas
  }
}



const mapDispatchToProps = (dispatch)=>{
 return{
    actions:{
        getTareasFetchGen: bindActionCreators((user)=>getTareasFetchGen(user), dispatch),
        
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListadoTareas);
