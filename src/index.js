import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

//Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const feedbackReducer = (state=0, action) => {
    if (action.type === 'FEELING') {
        return {...state, feeling: action.payload}
    } else if (action.type === 'UNDERSTANDING') {
        return {...state, understanding: action.payload}
    } else if (action.type === 'SUPPORTED') {
        return {...state, support: action.payload}
    } else if (action.type === 'COMMENTS') {
        return {...state, comments: action.payload}
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    })
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
