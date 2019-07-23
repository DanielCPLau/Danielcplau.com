import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom'

//routes
import Contact from '../src/components/Contact';
import Home from '../src/components/Home';
import Projects from '../src/components/Projects';
import Header from '../src/components/Header';

ReactDOM.render(
  <BrowserRouter basename='/Danielcplau.com'>
    <div>
      <Header/>
      <Route exact path='/' component={Home}/>
      <Route path='/contact' component={Contact} />
      <Route path='/projects' component={Projects} />
    </div>
  </BrowserRouter>
  , document.querySelector('.container'));