import { hot, } from 'react-hot-loader/root';
import React, { Component, } from 'react';

class Root extends Component {
	render() {
		return (
			<div style={{ textAlign: 'center', }}>
				<h1> Welcome to React</h1>
				<img src="images/user.png" style={{ height: 50, width: 50, }} />
			</div>
		);
	}
}

export default hot(Root);
