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
                   { 
                     props.state.map((value,index)=>{
                         return (
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.quan}</td>
                            <td>
                                <button onClick={()=>{
                                    props.dispatch({type:'수량증가'});
                                }}>+</button>
                                <button onClick ={()=>{
                                    props.dispatch({type : '수량감소'});
                                }}>-</button>
                            </td>
                        </tr>
                       );
                     })
                   }
                </tbody>
            </Table>
        </div>
    )
}

// Redux를 이용
// index.js 에서 let store = createStore(()=>{ return[~~]}); 을 통해 store을 정의하고
// <Provider store={store}>
// <App/>
// </Provider> 
// 를 통해서 전달한 state를 Cart.js 에서 받아온다. 
// 이를 받아오기 위해서는
// import {connect} from 'react-redux'; 
// export default (state를props화시키는함수이름)(Cart);
// 을 작성하여 Cart 컴포넌트에서 props를 받아와서 사용하면 된다.  
function state를props화(state){
    return {
        state : state
    }
}

export default connect(state를props화)(Cart); 