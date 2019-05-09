import { applyMiddleware, createStore,compose, } from 'redux';
import thunk from 'redux-thunk';
import reducer from 'src/reducers';

const middleware = compose(
	applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
);

export default createStore(reducer, middleware);