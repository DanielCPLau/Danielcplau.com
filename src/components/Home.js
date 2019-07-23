import React, { Component } from 'react';

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
    return (
      <div>
        <div style={bg}><img style={img} onLoad={this.handleHomeLoaded.bind(this)} src='https://raw.githubusercontent.com/DanielCPLau/Danielcplau.com/gh-pages/Site%201.0/Images/san-francisco-52.jpg'/></div>
        {this.state.homeLoaded &&
          <div style={aboutStyle}><About/></div> }
      </div>
    )
  }
}

var bg = {
  position: 'fixed',
  top: '-50%',
  left: '-50%', 
  width: '230%', 
  height: '190%',
}

var img = {
  filter: 'brightness(65%)',
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
  maxWidth: '30%',
  marginTop: '8%'
}

var textStyle = {
  zIndex: 2,
  position: 'absolute',
  bottom: 160,
  right: 200,
  color: 'white',
  fontSize: '65px',
  fontFamily: 'Oswald'
}

export default Home;
