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
					<br/>
					All my personal projects can be view over at my github repository. <br/>
					Soon they'll be displayed here, but for now head over <a href="https://www.github.com/danielcplau" target="_blank">here</a>
				</div>
				<Carousel />
			</div>
		)
	}
}

var divStyle = {
	height: '75px',
	background: '#43857C',
	width:'100vw',
	marginLeft: 'calc(-50vw + 50%)'
}


export default Projects;