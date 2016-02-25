import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import {
    createStore, applyMiddleware
}
from 'redux';
import rootReducer from '../reducers';

const loggerMiddleware = createLogger(),

    createStoreWithMiddleware = applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        loggerMiddleware // neat middleware that logs actions
    )(createStore);

export default initialState => createStoreWithMiddleware(rootReducer, initialState);
