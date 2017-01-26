import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
      /** Credits to Quackit.com for template **/
      <div className="container">
        <div className="row">
          <div className="col-lg-12" style={projectTitle} >
            <h1 className="page-header" style={headerText}>Projects (<a href="https://www.github.com/danielcplau" target="_blank">Github</a>)</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 portfolio-item">
            <h3 style={projectTitle}>
              <a href="https://github.com/DanielCPLau/MTS-UCSD-App" target="_blank">Triton Transit Mobile App</a>
            </h3>
            <br/>
            <img className="img-responsive" src="http://i.imgur.com/eIik97t.png" alt="" />
            <br/>
            <br/>
            <p style={textStyle}>An app made to intertwine campus and local bus routes and times together. Lets you view buses near your location, maps of bus routes, favorite 
               bus stops, as well as view specific bus times for stops.</p>
          </div>
          <div className="col-md-6 portfolio-item">
            <h3 style={projectTitle} >
              <a href="https://github.com/DanielCPLau/InstaYT" target="_blank">InstaYT</a>
            </h3>
            <br/>
            <img className="img-responsive" src="http://i.imgur.com/c8b0xiV.png" alt=""/>
            <br/>
            <br/>
            <p style={textStyle}>A youtube player that immediately loads the first item in search term as you type. Has wider screen than YouTube offers on its website. 
               Features that are to be added : playlist system, most likely to be used as a music list such as Spotify ; Theater Mode. 
            </p>
          </div>
        </div>
        <br/>
        <hr/>
        <div className="row">
          <div className="col-md-6 portfolio-item">
            <h3 style={projectTitle} >
              <a href="https://github.com/DanielCPLau/What4Cast" target="_blank">What4Cast</a>
            </h3>
            <br/>
            <img className="img-responsive" src="http://i.imgur.com/6Vpw3ij.png" alt=""/>
            <br/>
            <br/>
            <p style={textStyle}>Forecast prediction web app, when you input a specific city, it will give a 5 day range overview of weather, and gives specifics on a day when clicked.</p>
          </div>
          <div className="col-md-6 portfolio-item">  
            <h3 style={projectTitle} >
              <a href="https://github.com/DanielCPLau/ReactinCalc" target="_blank">ReactinCalc</a>
            </h3>
            <br/>
            <img className="img-responsive" src="http://i.imgur.com/Ku3JzR8.png" alt=""/>
            <br/>
            <br/>
            <p style={textStyle}>Calculator web app made using React + Redux. Has a history of past entries.</p>
          </div>
        </div>
        <br/>
        <hr/>
        <div className="row">
          <div className="col-md-6 portfolio-item">
            <img className="img-responsive" src="http://lorempixel.com/800/400/city" alt=""/>
            <h3 style={projectTitle} >
              <a href="#">In Progress!</a>
            </h3>
            <br/>
            <p style={textStyle}></p>
          </div>
          <div className="col-md-6 portfolio-item">
            <img className="img-responsive" src="http://lorempixel.com/800/400/city" alt=""/>
            <h3 style={projectTitle} >
              <a href="#">In Progress!</a>
            </h3>
            <br/>
            <p style={textStyle}></p>
          </div>
        </div>
      </div>
    );
  }
}

var headerText = {
  fontFamily: 'Ubuntu'
}

var projectTitle = {
  textAlign: 'center'
}

var textStyle = {
  fontFamily: 'Raleway',
  fontSize: '17px'
}

export default Portfolio;
