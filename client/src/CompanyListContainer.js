import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCompany, removeCompany } from './actions';

import { ListGroup, ListGroupItem, Input } from 'reactstrap';

class CompanyListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleEnter = this.handleEnter.bind(this);
        this.handleClick = this.handleClick.bind(this);

    }

    handleInput(e) {
        this.setState({ value: e.target.value });
    }

    handleEnter(e) {
        if (e.key === 'Enter') {
            this.props.addCompany(this.state.value);
            this.setState({ value: '' })
        }
    }

    handleClick(company) {
        this.props.removeCompany(company);
    }

    render() {
        // I'm aware the arrow function in the onClick re-renders every click... // https://github.com/airbnb/javascript/issues/844
        const { companies } = this.props;
        return (
            <aside>
                <Input placeholder='Company symbol' onChange={this.handleInput} onKeyPress={this.handleEnter} value={this.state.value} />
                <ListGroup>
                    {
                        companies.map((company, index) => <ListGroupItem  key={index} className="justify-content-between">
                           {company}
                            <span>
                                <button type="button" className="btn btn-xs btn-danger" onClick={() => this.handleClick(company)}>x</button>
                            </span>
                        </ListGroupItem>)
                    }
                </ListGroup>
            </aside>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        companies: state.stock.companies
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addCompany: (symbol) => dispatch(addCompany(symbol)),
        removeCompany: (symbol) => dispatch(removeCompany(symbol))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyListContainer);