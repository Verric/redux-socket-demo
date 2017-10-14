import React, { Component } from 'react';
import { connect } from 'react-redux';
import io from 'socket.io-client';
import { connectToIex, disconnectFromIex, receivedData } from './actions';

import DataTable from './DataTable';


let socket;

class DataTableContainer extends Component {

    constructor(props) {
        super(props);
        socket = io('wss://localhost:1212'); //io('https://ws-api.iextrading.com/1.0/last');
        socket.on('connect', () => {
            props.connect();
            socket.emit('subscribe', 'msft');
        });
        socket.on('disconnect', () => props.disconnect());
        socket.on('message', (data) => { socket.emit('unsubscribe', 'msft'); console.dir('message', data); props.dispatchData(data) })
    }



    render() {
        const { data } = this.props;
        return (
                <DataTable data={data} />
        );
    }
}

const mapStateToProps = (store) => {
    console.log('MapStateToProps', store)
    return {
        data: store.stock.data
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        connect: () => dispatch(connectToIex()),
        disconnect: () => dispatch(disconnectFromIex()),
        dispatchData: (data) => dispatch(receivedData(data))
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(DataTableContainer);