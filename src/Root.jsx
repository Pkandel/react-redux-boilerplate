import { hot, } from 'react-hot-loader/root';
import React, { Component, } from 'react';

import { BrowserRouter, } from 'react-router-dom';
import  { Todo,}  from 'src/containers';
class Root extends Component {
	render () {
		return (
			<BrowserRouter>
				<Todo />
			</BrowserRouter>
		);
	}
}

export default hot(Root);
