import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div style={rootStyle}>
        <div style={textStyle}>
          Renovating :)
        </div>
      </div>
    )
  }
}

var rootStyle = {
  width: '100%',
  background: '#43857C',
  height: '80px'
}

var textStyle = {
  paddingTop: '200px',
  textAlign: 'left',
  fontSize: '60px',
  fontFamily: 'Oswald'
}

export default Projects;