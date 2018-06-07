import React, { Component } from 'react';
import Signature from './Signature';

class About extends Component {
  constructor() {
    super();
    this.state = { selfLoaded: false };
  }
  handleSelfLoaded() {
    var elemShade = this.refs.shade;
    elemShade.style.backgroundColor = 'rgba(0,0,0,.55)';
    this.setState({ selfLoaded: true });
  }
  render() {
    return (
      <div ref="shade">
        <br/>
        <br/>
        <br/>
        <div style={imgDiv}><img style={imgStyle} onLoad={this.handleSelfLoaded.bind(this)} src="https://raw.githubusercontent.com/DanielCPLau/Danielcplau.com/gh-pages/static/about.png" /></div>
        <br/>
        <br/>
        {this.state.selfLoaded &&
        <div>
          <div style={textStyle}>
            Hey, my name is Daniel. <br/>
            I'm nearly done with college. (Computer Science B.S. UCSD 19') <br/> <br/>
            This site gets random updates as time passes. <br/>
            <br/>
            Feel free to shoot me a message!
          </div>
          <Signature />
          <div style={psStyle}>P.S. click the signature to make it draw itself again & again!</div>
        </div> }
      </div>
    )
  }
}

var imgDiv = {
  textAlign: 'center'
}

var imgStyle = {
  maxWidth: '26%'
}

var textStyle = {
  fontFamily: 'Ubuntu',
  marginLeft: '8px',
  color: 'white'
}

var psStyle = {
  fontFamily: 'Ubuntu',
  marginLeft: '8px',
  color: 'white',
  fontSize: '12px'
}
export default About;