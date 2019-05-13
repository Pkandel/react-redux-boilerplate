import { hot, } from 'react-hot-loader/root';
import React, { Component, } from 'react';

class Root extends Component {
	render () {
		return (
			<div style={{textAlign: 'center',}}>
				<h1> React Redux boilerplate with hot module :) </h1>
			</div>
		);
	}
}

export default hot(Root);
