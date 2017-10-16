import express from 'express';
import http from 'http';
import io from 'socket.io';
import cors from 'cors';
import { createServer, createHandler, combineHandlers } from 'redux-socket.io-connect';
import Faker from 'faker';

const app = express();
app.use(cors());
app.options('*', cors())

const server = http.createServer(app);
const socket = io(server);
server.listen(4210);

let timerId;

const startRequestHandler = createHandler({
  START_STREAM: (context, action) => {

    context.dispatch({ type: 'CONNECT' })

    timerId = setInterval(() => context.dispatch({
      type: 'DATA',
      message: Faker.fake("{{name.firstName}} {{name.lastName}} of {{company.companyName}}: {{address.country}}")
    }), 1000);
  }
});

const stopRequestHandler = createHandler({
  STOP_STREAM: (context, action) => {
    clearInterval(timerId);
    context.dispatch({
      type: 'DISCONNECT'
    })
  }
});

const handlers = combineHandlers({ startRequestHandler, stopRequestHandler });

createServer(socket, handlers);

