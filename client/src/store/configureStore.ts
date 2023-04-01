import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

const configureStore = () => {
    const middlewares = [thunk, logger];
    if (process.env.NODE_ENV === 'production') {
        middlewares.pop();
    }
    return createStore(rootReducer, applyMiddleware(...middlewares));
};

export default configureStore;