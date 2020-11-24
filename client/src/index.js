import 'materialize-css/dist/css/materialize.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
// import TodoList from './components/TodoList';


 const store = createStore(() => reducers, {}, applyMiddleware(reduxThunk));


// var todoItems = [];
// todoItems.push({index: 1, value: "learn react", done: false});
// todoItems.push({index: 2, value: "Go shopping", done: true});
// todoItems.push({index: 3, value: "buy flowers", done: true});

 ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));

// ReactDOM.render(<App initItems={todoItems} />, document.querySelector('#root'));