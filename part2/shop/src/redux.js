import {createStore, combineReducers} from 'redux'; 

let 알림창닫기 = false; 
function reducer2(state= 알림창닫기, 액션){
  if (액션.type === 'true'){
    return true; 
  } else if(액션.type ==='false'){
    return false; 
  }
  return state; 
}

let 초기데이터 = [
  {
    name : 'White cute Shoes',
    수량 : 1
  },
  {
    name : 'Black Yark Shoes', 
    수량 : 2
  }
];

function reducer(state = 초기데이터, 액션){
  if (액션.type === '수량증가'){
    let temp = [...state];
    temp[0].수량++; 
    return temp; 
  }else if (액션.type === '수량감소'){
    let temp = [...state];
    temp[0].수량--;
    return temp; 
  }
  else {
    return state;
  }
}

let store = createStore(combineReducers({reducer, reducer2})); 

export default store; 