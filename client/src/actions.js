export const startData = () => {
    return {
        type: 'START_STREAM',
        meta: {
            emit: true
        }
    };
}

export const stopData = () => {
    return {
        type: 'STOP_STREAM',
        meta: {
            emit: true
        }
    };
}

export const clearData = () => {
    return {
        type: 'CLEAR_DATA'
    }
}