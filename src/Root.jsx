import { hot, } from 'react-hot-loader/root';
import React, { Component, } from 'react';

import { BrowserRouter, } from 'react-router-dom';

class Root extends Component {
	render () {
		return (
			<BrowserRouter>
				<h1> React Redux boilerplate with hot module </h1>
			</BrowserRouter>
		);
	}
}

export default hot(Root);
