import { reducer } from '../reducer';


describe('Reducer test', () => {
    
    it(`should mark "connected" as true on connection`, () => {
        const initState = {connected: false};
        const action = {type: 'CONNECT'};

        const newState = reducer(initState, action);

        expect(newState.connected).toBe(true);
    });

    it(`should mark "connected" as false on disconnection`, () => {
        const initState = {connected: true};
        const action = {type: 'DISCONNECT'};

        const newState = reducer(initState, action);

        expect(newState.connected).toBe(false);
    });

    it(`should append a new message to state`, () => {
        const message = "Hello World";
        const initState = {messages: [], connected: false};
        const action = {type:'DATA', message};

        const newState = reducer(initState, action);

        expect(newState.messages).toEqual(expect.arrayContaining([message]));
    });

    it(`should clear all messages`, () => {
        const messages = ["Hello World", "GoodBye World"];
        const initState = {messages, connected: false};
        const action = {type:'CLEAR_DATA'};

        const newState = reducer(initState, action);

        expect(newState.messages).toEqual(expect.arrayContaining([]));
    });

});

