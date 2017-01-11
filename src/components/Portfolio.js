import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    return (
    	/** Credits to Quackit.com for template **/
      <div className="container">

        <div className="row">
            <div className="col-lg-12">
                <h1 className="page-header">Projects</h1>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6 portfolio-item">
                <a href="#">
                    <img className="img-responsive" src="http://lorempixel.com/700/400/nature/1" alt=""/>
                </a>
                <h3 style={projectTitle}>
                    <a href="#">MTS+UCSD Bus App</a>
                </h3>
                <p>An app made to intertwine campus and local bus routes and times together. Lets you view buses near your location, maps of bus routes, favorite 
                	 bus stops, as well as view specific bus times for stops.</p>
            </div>

            <div className="col-md-6 portfolio-item">
                <a href="#">
                    <img className="img-responsive" src="http://lorempixel.com/700/400/nature/2" alt=""/>
                </a>
                <h3 style={projectTitle} >
                    <a href="#">ReactinCalc</a>
                </h3>
                <p>Calculator web app made using React + Redux. Has a history of past entries.</p>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6 portfolio-item">
                <a href="#">
                    <img className="img-responsive" src="http://lorempixel.com/700/400/nature/3" alt=""/>
                </a>
                <h3 style={projectTitle} >
                    <a href="#">What4Cast</a>
                </h3>
                <p>Forecast prediction web app, when you input a specific city, it will give a 5 day range overview of weather, and gives specifics on a day when clicked.</p>
            </div>

            <div className="col-md-6 portfolio-item">
                <a href="#">
                    <img className="img-responsive" src="http://lorempixel.com/700/400/nature/4" alt=""/>
                </a>
                <h3 style={projectTitle} >
                    <a href="#">InstaYT</a>
                </h3>
                <p>A youtube player that immediately loads the first item in search term as you type. Has wider screen than YouTube offers on its website. 
                	 Features that are to be added : playlist system, most likely to be used as a music list such as Spotify ; Theater Mode. 
                </p>
            </div>
        </div>

        <div className="row">
            <div className="col-md-6 portfolio-item">
                <a href="#">
                    <img className="img-responsive" src="http://lorempixel.com/700/400/nature/5" alt=""/>
                </a>
                <h3 style={projectTitle} >
                    <a href="#">In Progress :)</a>
                </h3>
                <p>Coming soon!</p>
            </div>

            <div className="col-md-6 portfolio-item">
                <a href="#">
                    <img className="img-responsive" src="http://lorempixel.com/700/400/nature/6" alt=""/>
                </a>
                <h3 style={projectTitle} >
                    <a href="#">In Progress :)</a>
                </h3>
                <p>Coming soon!</p>
            </div>
        </div>
      </div>
    );
  }
}

var projectTitle = {
	textAlign: 'center'
}

export default Portfolio;
