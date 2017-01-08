import React, { Component } from 'react';
import Slider from 'react-slick';

import About from './About';

class Home extends Component {
  constructor() {
    super();
    this.state = { homeLoaded: false };
  }
  handleHomeLoaded() {
    this.setState({ homeLoaded: true });
  }
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
				<div style={bg}><img style={img} onLoad={this.handleHomeLoaded.bind(this)} src='https://raw.githubusercontent.com/DanielCPLau/Danielcplau.com/gh-pages/Site%201.0/Images/san-francisco-52.jpg'/></div>
				{this.state.homeLoaded &&
        <div>
          <div style={aboutStyle} className="col-md-4"><About /></div>
          <div style={textStyle} className="col-md-4"> SF </div>
			  </div> }
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
  filter: 'brightness(75%)',
  position: 'absolute',
  top: '0',
  left: '0', 
  right: '0', 
  bottom: '0', 
  margin: 'auto',
  minWidth: '50%',
  minHeight: '50%'
}

var aboutStyle = {
  zIndex: '2',
  position: 'absolute',
  top: '50',
  right: '0'
}

var textStyle = {
  zIndex: 2,
  position: 'absolute',
  bottom: 60,
  left: 60,
  color: 'white',
  fontSize: '65px',
  fontFamily: 'Oswald'
}

export default Home;
