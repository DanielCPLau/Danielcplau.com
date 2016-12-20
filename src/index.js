import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

//routes
import Contact from '../src/components/Contact';
import Home from '../src/components/Home';
import Site from '../src/components/Site';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path='/' component={Site}>
			<IndexRoute component={Home} />
			<Route path='contact' component={Contact} />
		</Route>
	</Router>
	, document.querySelector('.container'));