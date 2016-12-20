import React, { Component } from 'react';
import { connect } from 'react-redux';
import Contact from './Contact';
import NavBar from './NavBar';

class Site extends Component {
	render() {
		return (
			<div style={fullPageStyle}>
				{this.props.children}
			</div>
		)
	}
}

var fullPageStyle = {
	width:'100vw',
	marginLeft: 'calc(-50vw + 50%)'
}

export default Site;