import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';  


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

let store = createStore(reducer); 

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
