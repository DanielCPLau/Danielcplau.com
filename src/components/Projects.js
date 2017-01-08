import React, { Component } from 'react';
import Carousel from './Carousel';

class Projects extends Component {
	render() {
		var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
		return (
			<div>
				<div style={divStyle}>

				</div>
				<Carousel />
			</div>
		)
	}
}

var divStyle = {
	height: '80px',
	background: '#43857C',
	width:'100vw',
	marginLeft: 'calc(-50vw + 50%)'
}


export default Projects;