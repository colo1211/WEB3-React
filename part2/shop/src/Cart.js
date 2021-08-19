import React from 'react';
import {Table} from 'react-bootstrap'; 
import { connect } from 'react-redux';


function Cart(props){
   
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Product</th>
                <th>담은 개수</th>
                <th>수량 변경</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.state.map((value, index)=>{
                        return (
                        <tr key={index}>
                            <td>#</td>
                            <td>{value.name}</td>
                            <td>{value.수량}</td>
                            <td>
                                <button className='btn btn-danger' style={{marginRight:'5px'}} onClick={()=>{
                                    props.dispatch({type : '수량증가'}); 
                                }}>+</button>
                                <button className='btn btn-danger' style={{marginLeft:'5px'}} onClick={()=>{
                                    props.dispatch({type : '수량감소'});
                                }}>-</button>
                            </td>
                        </tr>
                        );
                    })
                }

                {/* <tr>
                <td>#</td>
                <td>{props.state[0].name}</td>
                <td>{props.state[0].price}</td>
                <td>아직</td>
                </tr> */}
            </tbody>
        </Table>
    )
}

function state를props화(state){
    return {
        state : state
    }
}

export default connect (state를props화)(Cart); 