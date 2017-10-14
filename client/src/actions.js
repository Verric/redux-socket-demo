

// ------------------ CONNECTION ------------------------


export const connectToIex = () => {
    return (dispatch) => dispatch({ type: 'CONNECT' })
}

export const disconnectFromIex = () => {
    return (dispatch) => dispatch({ type: 'DISCONNECT' });
}

// ------------------------------------------------------

const receiveData = (data) => {
    return {
        type: 'RECEIVE_DATA',
        data
    };
}

export const receivedData = (data) => {
    return (dispatch) => dispatch(receiveData(JSON.parse(data)));
}



// ------------------ ADD / REMOVE ----------------------


export const addCompany = (company) => {
    return (dispatch) => dispatch({
        type: 'ADD_COMPANY',
        company
    });
}


export const removeCompany = (company) => {
    return (dispatch) => dispatch({
        type: 'REMOVE_COMPANY',
        company
    });
}

// ------------------------------------------------------