import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import routing from "./route";
import rootReducer from './reducers';

const initialState={};

const middleware=[thunk];

export const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

ReactDOM.render(
	<Provider store={store}>
		{routing}
	</Provider>, 
	document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();