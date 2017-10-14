import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger'

import { stockReducer } from './reducer';

const initState = {
    connected: false,
    companies: ['fb', 'msft', 'aapl'],
    data: [
        {
            symbol: 'fb',
            price: '123.45',
            size: '500'
        },
        {
            symbol: 'aapl',
            price: '341.45',
            size: '100'
        },
        {
            symbol: 'msft',
            price: '10.45',
            size: '250'
        }
    ]
}

const rootReducer = combineReducers({
    stock: stockReducer
});

export const store = createStore(
    rootReducer,
    {stock: initState},
    applyMiddleware(thunk, logger)
);





