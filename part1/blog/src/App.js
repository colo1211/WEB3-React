import logo from './logo.svg';
import './App.css';

function App() {

  let post = `용인시 성당`;

  function 함수(){
    return 100;
  }

  return (
    <div className="App">
          <div className='black-nav'>
            <div style={{fontSize : '15px',color : 'skyblue'}}>My Dev-blog</div>
            {/* style 속성을 만지고 싶다면 {속성명 : '속성값'} 형태로 객체형식으로 넣어준다. 
              또한 이것도 변수로 치환이 가능하다. 
            */}
          </div>
          <h4>{post}</h4>
          {/* 데이터 바인딩이 매우 쉬워진다. {변수명} 바로 쓰면 됨
            document.getElementById~~~~ 에서 해방
          */}
    </div>
  );
}

export default App;
