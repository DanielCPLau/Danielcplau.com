import React, { Component } from 'react';

class Projects extends Component {
	render() {
		return (
			<div style={divStyle}>
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
				All my personal projects can be view over at my github repository. <br/>
				Soon they'll be displayed here, but for now head over <a href="https://www.github.com/danielcplau" target="_blank">here</a>
			</div>
		)
	}
}

var divStyle = {
	margin: '15px',
	background: '#43857C'
}

export default Projects;