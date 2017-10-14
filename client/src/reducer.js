let initialState = {
    connected: false,
    companies: [],
    data: []
};

export const stockReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'CONNECT':
            return Object.assign({}, state, { connected: true });

        case 'DISCONNECT':
            return Object.assign({}, state, { connected: false });

        case 'RECEIVE_DATA':
            return {
                ...state, data: [...state.data, action.data]
            };

        case 'ADD_COMPANY':
            return {
                ...state,
                companies: [...state.companies, action.company]
            };

        case 'REMOVE_COMPANY':
        console.log(action)
            return {
                ...state,
                companies: state.companies.filter(company => company !== action.company)
            };

        default:
            return state;
    }
}