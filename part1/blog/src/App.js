/*eslint-disable*/
import React , {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['수원시맛집','강남카페거리','하동녹차관광지']);
  let [좋아요, 좋아요변경] = useState([0,0,0]);
  let [modal, modal변경] = useState(false);
  let [누른번호, 누른번호변경] = useState(0);
  let [입력값, 입력값변경] = useState(''); 


  //  map 함수
  var 어레이 = [2,3,4]; 
  // array 내의 모든 데이터에 똑같은 작업을 시켜주고 싶을 때 .map()
  var newArray = 어레이.map(function(value){
    return value * 3; 
  })

  /* 토글 역할을 해주는 modal 스위치 */
  function modal스위치(){
    if(modal === true){ // 열려야함 
      modal변경(false);
      console.log(modal);
    }else { // 닫혀야함
      modal변경(true);
      console.log(modal);
    }
  }

  function 좋아요추가(value){
    let tempLike = [...좋아요];
    tempLike[value] += 1;
    console.log(tempLike);
    좋아요변경(tempLike);
  }

  function 제목바꾸기(){
// 전제 : 수정을 할때는 무조건 수정함수를 통해서 수정한다. 
// 금기 사항! 
//state는 배열이지만 직접 건들지 않는다. ex) 글제목[0] = '용인시 관광명소'; 

    // 방법 1. deep Copy를 통해서 
    // state를 deep copy (Spread Operate)
    // * 복사한 것이 원본에 영향을 미치지 않음 (값 공유 X)
    var newArray = [...글제목];
    newArray[0] = '창원시 여행명소';
    글제목변경(newArray);

    // 방법 2. 그대로 하드코딩해서 함수에 때려넣기
    // 글제목변경(['창원시 여행명소','죽전 카페 거리','종로 젊음의 거리'])
  }

  function 순서바꾸기(){
    let sortArray = [...글제목];
    sortArray.sort((a,b)=>{
      if (a<b){
        return -1;
      }else{
        return 1;
      }
    })
    글제목변경(sortArray);
  }

  return (
    //return 내에서는 
    <div className="App">
          <div className='black-nav'>
            <div style={{fontSize : '15px'}}>My Dev-blog</div>
            {/* style 속성을 만지고 싶다면 {속성명 : '속성값'} 형태로 객체형식으로 넣어준다. 
              또한 이것도 변수로 치환이 가능하다. 
            */}
          </div>
          {/* 데이터 바인딩이 매우 쉬워진다. {변수명} 바로 쓰면 됨
            document.getElementById~~~~ 에서 해방
          */}

          <button className='btn' onClick={ 제목바꾸기 }> 상품 목록 변경 </button>
          <button className='btn' onClick={ 순서바꾸기 }> 상품 순서 정렬 </button>

          {
            // JSX 내에서는 for,if 를 사용 할 수 없다. 
            // 따라서 JSX 내에서 JS 문법을 사용하기 위해서는 {} 내에 작성해야 한다. 
            // if X -> 삼항연산자 , for X -> .map or forEach 내장함수를 사용한다.
            글제목.map((value,index)=>{
              return (
                <div className='list' key = { index } onClick={ ()=>{ modal변경(true)} }>
                <h3 onClick={ ()=>{ 누른번호변경(index) } }> {value} <span className='like-hand' onClick={ ()=>{ 좋아요추가(index)}}>👍</span> { 좋아요[index] } </h3>
                <p> 12월 11일 작성</p>
                <hr/>
            </div>
              );
            })
          }
{/* 
            <div className='list' onClick={ ()=>{ modal변경(true)} }>
                <h3> {글제목[0]} <span className='like-hand' onClick={ ()=>{ 좋아요추가(0)}}>👍</span> { 좋아요[0] } </h3>
                <p> 12월 11일 작성</p>
                <hr/>
            </div>

            <div className='list'>
                <h3> {글제목[1]} <span className='like-hand' onClick={()=>{ 좋아요추가(1) }}>👍</span> { 좋아요[1] } </h3>
                <p> 12월 11일 작성</p>
                <hr/>
            </div>

            <div className='list'>
                <h3> {글제목[2]} <span className='like-hand' onClick = {()=>{ 좋아요추가(2) }}>👍</span> { 좋아요[2] } </h3>
                <p> 12월 11일 작성</p>
                <hr/>
            </div> */}




            {/* 게시물 작성 하기 */}
          <div className='wrap-input'>
            <input className='input-submit' onInput={ (e)=>{ 입력값변경(e.target.value) } }/>
            <button className='my-btn' onClick={ ()=>{ 
              let temp = [...글제목];
              temp.unshift(입력값);
              글제목변경(temp);
             } }> Submit </button>
          </div>
           
           <button onClick={()=>{ modal스위치() }}> 모달창 띄우기 버튼</button>

          {/* 리액트에서의 if문 : 삼항연산자 
            JSX 내에서 JS 문법을 사용하기 위해서는 중괄호로 감싼 이후에 작성하여야 한다. 
            ex) 변수, 함수
            if X -> 삼항연산자,  for X -> map()함수 
          */}

           {
             modal === true
             ? <Modal 글제목 = {글제목} 누른번호 = {누른번호} modal변경={modal변경}></Modal> // true일때 Modal 창을 띄운다. 
             : null  // false 일때 Modal 창을 닫는다. 
           }
  
    </div>
  );
}


// 컴포넌트로 만든 Modal UI 
// 자식 컴포넌트(Modal)는 부모 컴포넌트(App)에서 선언한 state를 사용하기 위해서는 props를 통해서 전달해야 한다. 
// props : 일종의 매개변수(?) 느낌
// { props.state명 }으로 불러와서 사용 가능

function Modal(props){
  return (
    <div className='modal'>
    <h3> 제목 : {props.글제목[props.누른번호]}</h3>
    <p> 상세내역 </p>
    <p> 날짜 </p>
    <button onClick = {()=>{props.modal변경(false)}} >Close</button>
  </div>
  )
}

export default App;
