import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';

class Header extends Component {
  render() {
    return (
      <div style={fullPageStyle}>
        <NavBar fixed={"no"} />
      </div>
    )
  }
}

var fullPageStyle = {
  width:'100vw',
  marginLeft: 'calc(-50vw + 50%)'
}

export default Header;