import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

/**
 * Import the stylesheet you want used! Here we just reference
 * the main SCSS file we have in the styles directory.
 */
import './styles/main.scss';


/**
 * Both configureStore and Root are required conditionally.
 * See configureStore.js and Root.js for more details.
 */
import { configureStore } from './store/configureStore';
import { Root } from './containers/Root';

// Benchmark: Start keeping track of time for how long it takes to load
export const startTime = new Date().getTime();

const store = configureStore();

// Choose our Redux store
ReactDOM.render(
	<BrowserRouter>  
		<Root store={store}/>,
		document.getElementById('root')
	</BrowserRouter>
);
