/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav, Navbar, NavDropdown, Container, Button} from 'react-bootstrap'; 
// data.js 에서 데이터를 import 해오기 
import data from './data.js'; 


function App() {

  
  let [shoes , shoes변경] = useState(data); 
  return (

    <div className="App">

      {/* Navbar 레이아웃 */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Adadis</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
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
      
      {/* 웹사이트 대문 */}
      <div className='Jumbotron'>
        <div style = { { paddingTop : '8%' }}>
        <h1> 20% Season Off </h1>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for calling
          extra attention to featured content or information.
        </p>
        <p>
          <Button variant="primary">Learn more</Button>
        </p>
        </div>
      </div>

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
        
      </div>
      

    </div>

  );
}


// Product 목록 생성해주는 Component 반복문 내에서 요소 추가될때 마다 추가되도록 수정 하기 
function ProductTemplate(props){
  // console.log(props);
  return ( 
    <div className = 'col-sm-4 img-wrap'>
    <img src={'이미지파일/shoes'+ (props.index+1) +'.jpg'}/> 
    <h4> 상품명 : {props.shoes[props.index].title} </h4>
    <p> 상품설명 : {props.shoes[props.index].content } </p> 
    <p> 가격 : {props.shoes[props.index].price} </p> 
  </div>      
  );
}

export default App;
