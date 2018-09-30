import React, { Component } from 'react';
import ListadoTareas from '../../components/ListadoTareas';
import './index.css';
import { FormGroup, 
        Button, 
        FieldGroup, 
        ControlLabel, 
        FormControl,
        Grid,
        Row,
        PageHeader,
        Col } from 'react-bootstrap';

const wellStyles = { maxWidth: 1000, margin: '0 auto 10px' };
class Overview extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<Grid style={wellStyles}>
				<Row>
					<Col sm={12} md={12} xs={12} className="text-left">
						<h3><PageHeader>Tus tareas</PageHeader></h3>
					</Col>
				</Row>
				<Row>
					<Col sm={12} md={12} xs={12}>
						<ListadoTareas/>
					</Col>
				</Row>
			</Grid>
		);
	}
}

export default Overview;