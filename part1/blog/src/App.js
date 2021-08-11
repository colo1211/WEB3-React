/*eslint-disable*/
import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['수원시 맛집','강남 카페 거리','하동 녹차 관광지']);
  let [좋아요, 좋아요변경] = useState([0,0,0]);
  let [modal, modal변경] = useState(false);


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
            </div>
           
           {/* 리액트에서 UI를 만드는 관습 : state를 사용하여 조건에 맞게 true, false를 통해서 UI를 On/Off 한다.  */}
           {
             modal === true
             ? <Modal></Modal> // true
             : null // false
           }
           
    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
    <h3> 제목 </h3>
    <p> 상세내역 </p>
    <p> 날짜 </p>
  </div>
  )
}

export default App;
