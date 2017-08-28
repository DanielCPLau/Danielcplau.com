import React, { Component } from 'react';
import Portfolio from './Portfolio';
import NavBar from './NavBar';

class Projects extends Component {
  render() {
    return (
      <div style={rootStyle}>
        <div style={divStyle} >
          <NavBar fixed={'yes'} />
        </div>
        <Portfolio />
      </div>
    )
  }
}

var divStyle = {
  height: '80px',
  background: '#43857C',
  marginLeft: '16px',
  marginTop: '-1px'
}

var rootStyle = {

  width: '100%'
}


export default Projects;