import React, { Component } from 'react';
import Slider from 'react-slick';

import Signature from './Signature';

class Home extends Component {
	render() {
		var settings = {
      dots: true,
      infinite: true,
      speed: 800,
      autoplay: true,
      accessibility: true,
      fade: true
    };
		return (
			<div>
				<div style={bg}><img style={img} src='https://raw.githubusercontent.com/DanielCPLau/Danielcplau.com/redesign/Site%201.0/Images/san-francisco-52.jpg'/></div>
				<div style={sigStyle}><Signature/></div>
			</div>
		)
	}
}

var bg = {
  position: 'fixed',
  top: '-50%',
  left: '-50%', 
  width: '200%', 
  height: '200%',
}

var img = {
  position: 'absolute',
  top: '0',
  left: '0', 
  right: '0', 
  bottom: '0', 
  margin: 'auto',
  minWidth: '50%',
  minHeight: '50%'
}

var sigStyle = {
  zIndex: '2',
  position: 'absolute',
  marginLeft: '50px',
  marginRight: 'auto',
  left: '0',
  right: '0',
  marginTop: '450px'
}

export default Home;