import React, { Component } from 'react';
import Signature from './Signature';

class About extends Component {
	render() {
		return (
			<div style={divStyle}>
				<br/>
				<br/>
				<br/>
				<div style={imgDiv}><img style={imgStyle} src="https://raw.githubusercontent.com/DanielCPLau/Danielcplau.com/gh-pages/static/about.png" /></div>
				<br/>
				<br/>
				<div style={textStyle}>
					Hey, my name is Daniel Lau. <br/>
					At the moment I'm in college (Computer Science, BS, UCSD 19') <br/> <br/>
					This site is my professional portfolio, as well as a creative outlet. <br/>
					I like to think of this site as a reflection 
					of myself as I trek through life. As I learn and experience 
					more, this place will transform as well! <br/>
					<br/>
					<br/>
					Enjoy!
				</div>
				<Signature />
				<div style={psStyle}>P.S. click the signature to make it draw itself again & again!</div>
			</div>
		)
	}
}

var divStyle = {
	backgroundColor: 'transparent',
	backgroundColor: 'rgba(0,0,0,.55)'
}

var imgDiv = {
	textAlign: 'center'
}

var imgStyle = {
	maxWidth: '26%'
}

var textStyle = {
	fontFamily: 'Ubuntu',
	marginLeft: '8px',
	color: 'white'
}

var psStyle = {
	fontFamily: 'Ubuntu',
	marginLeft: '8px',
	color: 'white',
	fontSize: '12px'
}
export default About;