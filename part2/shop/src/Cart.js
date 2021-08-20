import React, { useEffect } from 'react';
import {Table} from 'react-bootstrap'; 
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom'; 

function Cart(props){
    let history = useHistory(); 

    useEffect(()=>{
        props.dispatch({type : 'false'});
    },[]);
    return (
        <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>id</th>
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
                            <td>{index}</td>
                            <td>{value.name}</td>
                            <td>{value.수량}</td>
                            <td>
                                <button className='btn btn-danger' style={{marginRight:'5px'}} onClick={()=>{
                                    props.dispatch({type : '수량증가', payload : { index : `${index}` }}); 
                                }}>+</button>
                                <button className='btn btn-danger' style={{marginLeft:'5px'}} onClick={()=>{
                                    if (props.state[`${index}`].수량 >0) props.dispatch({type : '수량감소', payload : { index : `${index}` }});
                                }}>-</button>
                            </td>
                        </tr>
                        );
                    })
                }

            </tbody>
        </Table>
                <button className='btn btn-primary' onClick={()=>{
                    history.goBack();
                }}>뒤로가기</button>
            {
                props.알림창닫기 === false
                ? <div className='my-alert mt-5'>
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