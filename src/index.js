//REACT
import React from 'react';
import ReactDOM from 'react-dom';
//REDUX
import { Provider } from 'react-redux'
import { createStore } from 'redux';
//redux components
import rootReducer from './reducers/index.js'

import App from './App';
import * as serviceWorker from './serviceWorker';
/*
const initialState = {
    ListWebs : [
      {name:'Blog'},
      {name:'Blog1'}
    ],
    activePost : 'Blog'
  };
*/

const store = createStore(rootReducer)

const render = ()=>{ 
    return (
        ReactDOM.render(
            <Provider store={store}>
                <App />
            </Provider>
        , document.getElementById('root'))
    )
};

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

render();
store.subscribe(render)