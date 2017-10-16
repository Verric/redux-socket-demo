# redux-socket-demo

A basic client-server app, used to test various redux-socket-io middle wares.

~~[redux-socket.io-connect](https://github.com/michaelmitchell/redux-socket.io-connect)~~ 

[redux-socket.io](https://github.com/itaylor/redux-socket.io)


### Set up and run server

Please note the server runs on port 4210 ('http://localhost:4210')

```
cd server/
```

Install
```
npm install / yarn install
```

Run in dev

*Uses [back pack](https://github.com/jaredpalmer/backpack) as a build tool*
```
npm run dev / yarn dev
```

---------------------------------------------
### Set up and run client

```
cd client/
```

Install
```
npm install / yarn install
```

Run in dev

```
npm run start / yarn start
```

### TODO: 
- ~~Add cors (on send and pre-flight) :airplane:~~
- maybe add some tests :thinking:
- branch and test [redux-socket.io](https://github.com/itaylor/redux-socket.io)
- see if its worth building custom middleware
