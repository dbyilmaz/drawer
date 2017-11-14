import { compose, applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './configureReducers';
import logger from 'redux-logger';

export default createStore(
    reducers,
    undefined,
    compose(
        applyMiddleware(ReduxThunk, logger)
    ),
);
