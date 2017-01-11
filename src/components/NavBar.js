import React, { Component } from 'react';
import { Link } from 'react-router';

class NavBar extends Component {
	render() {
    var fixedTop = 'navbar-fixed-top';
    console.log(this.props.fixed)
    if (this.props.fixed === "yes") {
      fixedTop = 'navbar';
    }
		return (
			<nav className={fixedTop}>
			  <div className='container-fluid'>
			    <ul style={ulnav}>
			      <Link to='/'><li style={navbarli}><div style={navfont} href="#home">HOME</div></li></Link>
			      <a href="https://drive.google.com/file/d/0B6Bj3XDLYFAQSFdIRU9YZWMtWXc/view" target="_blank"><li style={navbarli}><div style={navfont} href="#about">RESUME</div></li></a>
			      <Link to='/'><li style={navbarli}><h1 style={navbarHeader}>DC|PL</h1></li></Link>
			      <Link to='/projects'><li style={navbarli}><div style={navfont} href="#projects">PROJECTS</div></li></Link>
			      <Link to='/contact'><li style={navbarli}><div style={navfont} href="#connect">CONTACT</div></li></Link>
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
  overflow: 'hidden',
  WebkitTouchCallout: 'none',
  WebkitUserSelect: 'none',
  KhtmlUserSelect: 'none',
  MozUserSelect: 'none',
  MsUserSelect: 'none',
  userSelect: 'none'
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
