import { hot, } from 'react-hot-loader/root';
import React, { Component, } from 'react';

import { BrowserRouter, } from 'react-router-dom';

class Root extends Component {
	render () {
		return (
			<BrowserRouter>
				<div style={{textAlign: 'center',}}>
					<h1> Welcome to React </h1>
					<img src="images/user.png" style={{height: 50, width: 50,}} />
				</div>
			</BrowserRouter>
		);
	}
}

export default hot(Root);
