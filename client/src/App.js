import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import DataTableContainer from './DataTableContainer';
import CompanyListContainer from './CompanyListContainer';

class App extends Component {
  render() {
    return (
      <Container >
        <Row>
          <Col lg="9">
            <DataTableContainer />
          </Col>
          <Col lg="3">
            <CompanyListContainer />
          </Col>
        </Row>
      </Container >
    );
  }
}

export default App;
