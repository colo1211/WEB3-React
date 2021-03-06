import React, { useEffect,memo } from 'react'; 
import { Table } from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';
import './Detail.scss'; 
import {useHistory} from 'react-router-dom'; 

function Cart(props){


    let 이름 = '김경원'; 
    let 나이 = 26; 

    let state = useSelector((state)=>{ return state});

    let dispatch = useDispatch(); 

    let history = useHistory();
    useEffect(()=>{
        dispatch({type : '열기'})
    },[]);
    //console.log(props); 
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
                     state.reducer.map((value,index)=>{
                         return (
                        <tr key={index}>
                            <td>{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.quan}</td>
                            <td>
                                <button className='btn btn-danger' style={{marginRight : '5px'}}onClick={()=>{
                                    dispatch({type:'수량증가', payload : `${index}`});
                                }}>+</button>
                                <button className='btn btn-danger' style={{marginLeft : '5px'}} onClick ={()=>{
                                    if (state.reducer[value.id].quan>0) dispatch({ type : '수량감소', payload :`${index}`});
                                }}>-</button>
                            </td>
                        </tr>
                       );
                     })
                   }
                </tbody>
            </Table>
            <button className='btn btn-primary' onClick={()=>{history.goBack()}}>Back</button>
            {
                props.alert === true
                ? <div className='my-alert mt-5'>
                    <p>지금 구매하면 신규할인 20%</p>
                    <button className='btn btn-primary' onClick = {()=>{dispatch({type:'닫기'})}}>Close</button>
                  </div> 
                :null // false 라면? 

            }
            <Parents 이름={이름} 나이={나이}></Parents>
        </div>
    )
}


function Parents(props){
    return (
        <div>
            <Child1 이름={props.이름}></Child1>
            <Child2 나이={props.나이}></Child2>
        </div>
    )
}

let Child1 = memo(function(props){
    useEffect(()=>{
        console.log('1번째 props가 변경된거 같아서 재렌더링함');
    })
    return(
        <div>{props.이름}</div>
    )
})

let Child2 = memo(function(props){
    useEffect(()=>{
        console.log('2번째 props가 변경된거 같아서 재렌더링함'); 
    })
    return (
        <div>{props.나이}</div> 
    )
})

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

// function state를props화(state){
//     console.log(state);
//     // return 내부에 있는 내용들이 props 로 전달될 것임.
//     // 따라서 return 을 { } 객체형태로 반환하게끔 중괄호로 해준다. 
//     return {
//         state : state.reducer,
//         alert : state.reducer2
//     }
// }

// export default connect(state를props화)(Cart); 

export default Cart; 