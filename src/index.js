import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';

//Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const feelingReducer = (state=0, action) => {
    if (action.type === 'FEELING') {
        return action.payload
    }
    return state
}

const storeInstance = createStore(
    combineReducers({
        feelingReducer,
    })
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
