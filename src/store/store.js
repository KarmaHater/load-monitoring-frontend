import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';
import createLogger from 'redux-logger';

const logger = createLogger();

module.exports = applyMiddleware(thunkMiddleware, logger
)(createStore)(rootReducer);