const initialState = {
    connected: false,
    messages: []
};

export const reducer = (state = initialState, action) => {

    switch (action.type) {

        case 'DATA':
            return {
                ...state,
                messages: [...state.messages, action.message]
            };

        case 'CONNECT':
            return {
                ...state, connected: true
            };

        case 'DISCONNECT':
            return {
                ...state, connected: false
            };

        case 'CLEAR_DATA':
            return {
                ...state,
                messages: []
            };

        default:
            return state;
    }
}