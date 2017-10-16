import React from 'react';
import { connect } from 'react-redux';
import { Container, Alert, Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap';
import { startData, stopData, clearData } from './actions';


const App = ({ startData, stopData, messages, connected, clearData }) => (
  <Container >

    <ButtonGroup>
      <Button style={{backgroundColor: '#4FC1E9'}} onClick={() => startData()}>Start</Button>
      <Button style={{backgroundColor: '#FFCE54'}} onClick={() => stopData()}>Stop</Button>
      <Button style={{backgroundColor: '#FC6E51'}} onClick={() => clearData()}>Clear</Button>
    </ButtonGroup>

    <Alert color={connected ? 'success' : 'danger'}>
      STATUS: {connected ? <h5 className="display-5"> Connected </h5> : <h5 className="display-5"> Disconnected </h5>}
    </Alert>

    <ListGroup>
      {
        messages.map((message, index) => <ListGroupItem key={index}>{message}</ListGroupItem>)
      }
    </ListGroup>

  </Container >
);

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    connected: state.connected
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    stopData: () => dispatch(stopData()),
    startData: () => dispatch(startData()),
    clearData: () => dispatch(clearData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
