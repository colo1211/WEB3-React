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
    id : 0,
    name : 'White cute Shoes',
    수량 : 1
  },
  {
    id : 1, 
    name : 'Black Yark Shoes', 
    수량 : 2
  }
];

function reducer(state = 초기데이터, 액션){
  if (액션.type === '장바구니추가'){
    let temp = [...state];
    let already = false;
    let where = 0;  // 어디있는지 찾아낸다. 
    for (let i=0; i<temp.length; i++){
      if (temp[i].name === 액션.payload.name){
        already = true;
        where = i;
        break;  
      }
    } 
    if (already === true){
      temp[where].수량+=1; 
    }
    else {
      temp.push(액션.payload); 
    }
    return temp; 
  }
  else if (액션.type === '수량증가'){
    let temp = [...state];
    temp[액션.payload.index].수량++; 
    return temp; 
  }else if (액션.type === '수량감소'){
    let temp = [...state];
    temp[액션.payload.index].수량--;
    return temp; 
  }
  else {
    return state;
  }
}

let store = createStore(combineReducers({reducer, reducer2})); 

export default store; 