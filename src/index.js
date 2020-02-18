import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

//Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

// reducer properties updated on form submissions, and sent to server on review page submission
const feedbackReducer = (state={currentStep: 0}, action) => {
    if (action.type === 'FEELING') {
        return {...state, feeling: action.payload, currentStep: state.currentStep+1}
    } else if (action.type === 'UNDERSTANDING') {
        return {...state, understanding: action.payload, currentStep: state.currentStep+1}
    } else if (action.type === 'SUPPORTED') {
        return {...state, support: action.payload, currentStep: state.currentStep+1}
    } else if (action.type === 'COMMENTS') {
        return {...state, comments: action.payload, currentStep: state.currentStep+1}
    } else if (action.type === 'PREVIOUS') {
        return {...state, currentStep: state.currentStep - 1}
    } else if (action.type === 'CLEAR_FEEDBACK') {
        return 0;
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    })
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
