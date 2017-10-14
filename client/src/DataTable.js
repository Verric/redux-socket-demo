import React, { Component } from 'react';
import moment from 'moment';
import { Table } from 'reactstrap';

export default class DataTable extends Component {

    render() {
        const data = this.props.data;
        console.log('DATA', data);
        return (
            <Table hover bordered responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Company symbol</th>
                        <th>Price</th>
                        <th>Size</th>
                        <th>DateTime</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((info, index) => (
                            <tr key={index}>
                                <th scope="row">{index+1}</th>
                                <td>{info['symbol']}</td>
                                <td>{info.price}</td>
                                <td>{info.size}</td>
                                <td>{moment(info.time).format('Do MM YYYY h:mm:ss a')}</td>                                
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
        );
    }
}
