import React, { useEffect } from 'react';
import {Table} from 'react-bootstrap'; 
import { connect } from 'react-redux';


function Cart(props){
    useEffect(()=>{
        props.dispatch({type : 'false'});
    },[]);
    return (
        <div>
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

            {
                props.알림창닫기 === false
                ? <div className='my-alert'>
                <p>지금 구매하면 20% 할인!</p>
                <button className='btn btn btn-primary' onClick={()=>{
                    props.dispatch({type : 'true'});
                }}>Close</button>
                </div>  
                : null
            }

        </div>
    )
}

function state를props화(state){
    console.log(state); 
    return {
        state : state.reducer,
        알림창닫기 : state.reducer2
    }
}

export default connect (state를props화)(Cart); 