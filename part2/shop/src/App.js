/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav, Navbar, NavDropdown, Container, Button} from 'react-bootstrap'; 
// data.js 에서 데이터를 import 해오기 
import data from './data.js'; 
import { Route, Link, Switch } from 'react-router-dom';
import Detail from './Detail.js'; 
import axios from 'axios'; // ajax 를 사용하기 위한 axios 라이브러리

function App() {

  let [shoes , shoes변경] = useState(data); 
  let [로딩중, 로딩중변경] = useState(false); // true일때는 로딩중, false 일때는 로딩 X  

  function 가격순정렬(){
    let tempShoes = [...shoes];
    tempShoes.sort((a,b)=>{
      return a.price-b.price;
    });
    shoes변경(tempShoes); 
  }

  return (

    <div className="App">

      {/* Navbar 레이아웃 */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Adadis</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to ="/">Home</Nav.Link>
              <Nav.Link as={Link} to ="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
{/* exact : URL 상에서 겹치는 것들을 안겹치게 해주는 역할 */}
<Switch>
  {/* Switch : 중복되는 URL 중 맨 위에 있는거 하나만 보여주게 해주는 역할
    React Router 는 URL 중 겹치는 URL 요소가 있으면 모두 보여주기 때문에 
    1. exact 2. Switch 를 사용해야 한다. 
  */}
  <Route exact path="/">
    {/* 메인페이지 */}
    {/* 웹사이트 대문 */}
    <div className='Jumbotron'>
        <div style = { { paddingTop : '8%' }}>
        <h1> 20% Season Off </h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Show more</Button>
        </p>
        </div>
      </div>

      <button className='btn btn-danger mt-3 mb-3' onClick={()=>{가격순정렬()}}>가격 순 정렬</button>
      
      <div className='container'>
        <div className = 'row'>
          {/* bootstrap grid layout
          하나의 row는 12col 로 이루어져 있다.  */}
          {
            shoes.map((value, index)=>{
              return <ProductTemplate shoes={shoes} index={index} key = {index}></ProductTemplate>
              // 다 개발해놓고 return 안써서 오류났었음. map 쓸때는 return 반드시 쓸 것
            })
          }
          
        </div> 

        {
          로딩중===true
          ? <div className='loading'> Loading ...</div>
          : null
        }
        
        <button className='btn btn-primary' onClick={()=>{ 

          로딩중변경(true); 
          // 상품 더보기 기능 개발
          // Card 컴포넌트는 반복문에 의해서 생성되고 있으므로, shoes 컴포넌트에 자료를 추가해주면 자동으로 
          // HTML을 짤 필요 없이 화면이 구성된다. 

          // axios.get('url')
          // .then(()=>{ 성공했을 때 })
          // .catch(()=>{ 실패했을 때 })
          axios.get('URL')
          .then((value)=>{ // 성공했을 때 
            로딩중변경(false); 
            // 방법 1. 
            let tempArray = [...shoes];
            let temp = [...value.data]; 
            console.log(temp);

            for (let i=0; i<temp.length; i++){
              tempArray.push(temp[i]);
            }
            // 방법 2. spread operator 를 활용한 자료 합치기
            // [[...shoes, ...value.data]] 

            shoes변경(tempArray);  
          })  
          .catch(()=>{ // 실패했을 때 
            로딩중변경(false);
            alert('실패'); 
          });
         }}> 더보기 </button>
      </div>
  </Route>

  <Route path="/detail/:id">
    <Detail shoes={shoes}/>
  </Route>

  <Route path="/:id">
    <h3>아무거나 적었을 때 이거 보여줘</h3>
  </Route>
</Switch>

</div>
  );
}


function ProductTemplate(props){
  // console.log(props);
  return ( 
    <div className = 'col-sm-4 img-wrap'>
    <img src={'이미지파일/shoes'+ (props.shoes[props.index].id+1) +'.jpg'}/> 
    <h4> 상품명 : {props.shoes[props.index].title} </h4>
    <p> 상품설명 : {props.shoes[props.index].content } </p> 
    <p> 가격 : {props.shoes[props.index].price} </p> 
  </div>      
  );
}

export default App;
