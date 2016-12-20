import React, { Component } from 'react';
import Signature from './Signature';

class Home extends Component {
	render() {
		return (
			<div>
				<div style={huge} >HELLO</div>
				<Signature/>
			</div>
		)
	}
}

var huge = {
	fontSize: '500px'
}
export default Home;