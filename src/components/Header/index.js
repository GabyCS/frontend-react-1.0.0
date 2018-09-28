import React, { Component } from 'react';
import './index.css';

class Header extends Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="App-header">
				<div className="header-style">
					<span className="title-header">
						<span>
							Tus Tareas
						</span>
					</span>
				</div>
          		<h1 className="App-title">Gestor de Tareas</h1>
			</div>
		);
	}
}

export default Header;