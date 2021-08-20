import React from 'react';
import {createStore, combineReducers} from 'redux';

let alert초기값 = true; 
function reducer2(state=alert초기값, 액션){
  if (액션.type === '닫기'){
    return false;
  } else if(액션.type ==='열기'){
      return true; 
  }
  return state;
}

let 데이터 = [
  {
    id : 0, 
    name:'멋진 신발', 
    quan : 2
  },
  {
    id : 1, 
    name:'멋진 신발2', 
    quan : 3
  }
];

// default parameter 문법, ES6 신문법
function reducer(초기값 = 데이터, 액션){
  if (액션.type === '장바구니추가'){
    let copy = [...초기값];
    let already = false;
    let where = 0; 
    for (let i =0; i<copy.length; i++){
      if (copy[i].name === 액션.payload.name){
        already = true; 
        where = i;
        break; 
      }
    }
    if (already === true){ // 이미있다면
      copy[where].quan++;
    }else{ // 없다면
      copy.push(액션.payload);
    }
    return copy; 
  }
  else if (액션.type === '수량증가'){
    console.log('액션빔',액션.payload);
    let copy = [...초기값];
    copy[액션.payload].quan++; 
    // console.log('수량증가누름');
    return copy; 
  }
  else if(액션.type === '수량감소'){
    let copy = [...초기값];
    copy[액션.payload].quan--;
    // console.log('수량감소누름');
    return copy; 
  }
  else {
    return 초기값;
  } 
}

let store = createStore(combineReducers({reducer,reducer2}));

export default store;