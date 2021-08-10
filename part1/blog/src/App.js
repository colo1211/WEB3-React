import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState(['수원시 맛집','죽전 카페 거리','종로 젊음의 거리']);

  let post = `용인시 성당`;

  return (
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
          <div className='list'>
              <h3> {글제목[0]} </h3>
              <p> 12월 11일 작성</p>
              <hr/>
          </div>

          <div className='list'>
              <h3> {글제목[1]} </h3>
              <p> 12월 11일 작성</p>
              <hr/>
          </div>

          <div className='list'>
              <h3> {글제목[2]} </h3>
              <p> 12월 11일 작성</p>
              <hr/>
          </div>

    </div>
  );
}

export default App;
