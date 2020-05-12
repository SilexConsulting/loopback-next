import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';
import history from './history';
import { connectRouter } from 'connected-react-router';
import { routerMiddleware } from 'connected-react-router';

import ui from './reducers/uiReducer';
import challenges from './reducers/challengeReducer';

const reducers = combineReducers({
    router: connectRouter(history),
    ui: ui.reducer,
    challenges: challenges.reducer,
});

export default configureStore({
  reducer: reducers,
  middleware: [thunk, logger, routerMiddleware(history)]
});
