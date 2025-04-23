import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';
// import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
        rootReducer: rootReducer.reducer,
    },
    applyMiddleware
});

export default store;