import React from 'react'; 
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';


function Cart(props){
    console.log(props); 
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                    <th>id</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>{props.state[0].id}</td>
                    <td>{props.state[0].name}</td>
                    <td>{props.state[0].quan}</td>
                    <td>@mdo</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

function state를props화(state){
    return {
        state : state
    }
}

export default connect(state를props화)(Cart); 
