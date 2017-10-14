import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger'
import { createClient } from 'redux-socket.io-connect';
import io from 'socket.io-client';

import { reducer } from './reducer';


const socket = io('http://localhost:4210');
const client = createClient(socket);

export const store = createStore(reducer,compose(client, applyMiddleware(logger)));





