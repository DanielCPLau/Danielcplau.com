import React, { Component } from 'react';

class NavBar extends Component {
	render() {
		return (
			<nav className='navbar-fixed-top'>
			  <div className='container-fluid'>
			    <ul style={ulnav}>
			      <li style={navbarli}><a style={navfont} href="#home">HOME</a></li>
			      <li style={navbarli}><a style={navfont} href="#about">ABOUT</a></li>
			      <li style={navbarli}>
			      <h1 style={navbarHeader}>
			        DC|PL
			      </h1>
			      </li>
			      <li style={navbarli}><a style={navfont} href="#projects">PROJECTS</a></li>
			      <li style={navbarli}><a style={navfont} href="#connect">CONTACT</a></li>
			    </ul>
			  </div>
			</nav>
		)
	}
}

var navbarHeader = {
  color: 'white',
  fontFamily: 'Ubuntu, sans-serif',
  fontSize: '40px',
  marginTop: '5px'
}

var ulnav = {
  listStyleType: 'none',
  margin: '0 auto',
  width: '750px',
  padding: '0 auto',
  overflow: 'hidden'
}

var navbarli = {
  display: 'inline',
  width: '100px',
  float: 'left',
  margin: '16px'
}

var navfont = {
  display: 'block',
  color: 'white',
  textAlign: 'center',
  padding: '15px 15px',
  textDecoration: 'none',
  fontFamily: 'Oswald, sans-serif',
  fontSize: '13px',
  fontWeight: 'BOLD',
  textShadow: '4px 4px rgba(0, 0, 0, 0.1)'
}

export default NavBar;