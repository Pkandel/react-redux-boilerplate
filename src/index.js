import React from 'react';
import { render, } from 'react-dom';
import Root from 'Root';

// redux
import { Provider, } from 'react-redux';
import store from 'src/store';

render(
	<Provider store={store}>
		<Root />
	</Provider>,
	document.getElementById('root'));
