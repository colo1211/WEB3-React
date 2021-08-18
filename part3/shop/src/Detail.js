import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'; 
import { useHistory, useParams } from 'react-router-dom'; 
import styled from 'styled-components'; 
import './Detail.scss';
import { 재고Context } from './App.js'; 
import { Nav } from 'react-bootstrap'; 
import { CSSTransition } from 'react-transition-group'; 

// 스타일 컴포넌트
let 박스 = styled.div`
  width : 100%;

`;
let 제목 = styled.h4`
  padding-top : 8px; 
  font-size : 30px;
  color : ${ props => props.색상 }
`;

// props : shoes, 재고, 재고변경()
function Detail(props){

  // 재고 Context 범위 내에 있기 때문에 useContext로 받아와서 사용
  let 재고 = useContext(재고Context);
  
  let [알림창, 알림창변경] = useState(true); 
  // 해당 Detail 컴포넌트가 렌더링 될때 실행되는 코드

  let [input, input변경] = useState();
  let [누른탭, 누른탭변경] = useState(0); 

  let [스위치, 스위치변경] = useState(false); 

  useEffect(()=>{
    let 타이머 = setTimeout(()=>{
      //2초 후에 alert-box 사라지게
      알림창변경(false); 
    },1000);
  },[]);

    let { id } = useParams(); 
    // params를 통해서 사용자가 detail/2라고 적었다면 2를 id 값으로 받아와서 데이터 바인딩 할수 있게끔 사용해주는 변수
    // detail/2 접속시 => props.shies[id].price 
    // 하드코딩을 통한 데이터 바인딩이 아니라 유동적으로 user가 입력한 값을 받아와서 사용이 가능하다. 
    // {id, id2} 를 통해서 사용자가 입력한 값을 가져 올 수 있다. 

    let history = useHistory(); 
    // 방문 기록을 저장해 놓는 Object, goBack()을 통해서 뒤로가기 버튼 개발


    // 가격 정렬 이후에 영구적인 id와 user가 URL창에 입력한 id와의 비교를 통해 같은 페이지를 detail 페이지에 전송
    let 찾은상품 = props.shoes.find((상품)=>{
      return 상품.id == id;
    });

    

    return (

    <div className="container">
      <박스>
        <제목 className='my-detail'>Detail Page</제목>
      </박스>

      {input}
      <input onChange={(e)=>{input변경(e.target.value)}}/>
      {
        알림창 === true
        ?<div className = 'my-alert'>
        상품 재고 {props.재고[찾은상품.id]}개 남았습니다!
        </div> 
        : null
      }
      
      <div className="row">
        <div className="col-md-6">
          <img src={'../이미지파일/shoes'+ (찾은상품.id+1) +'.jpg'} alt='dsa' width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <Info 재고={props.재고} 찾은상품={찾은상품}></Info>
          <p>여기는 useContext를 사용한 재고 {재고[찾은상품.id]}</p> 
          <button className="btn btn-danger btn-layout" onClick = {()=>{
            history.goBack(); 
          }}>뒤로가기</button> 
          <button className="btn btn-danger btn-layout" onClick={()=>{
            let tempArray = [...props.재고];
            tempArray[찾은상품.id] = props.재고[찾은상품.id] - 1;
            props.재고변경(tempArray); 
          }}>주문하기</button> 
        </div>
      </div>

      {/* Tab 기능 개발하기, 1번 누르면 1번에 대한 내용이 뜨게 개발한다.  */}
      <Nav className='mt-5' variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick = {()=>{ 스위치변경(false); 누른탭변경(0)}}>Option 0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick = {()=>{ 스위치변경(false); 누른탭변경(1)}}>Option 1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick = {()=>{ 스위치변경(false); 누른탭변경(2)}}>Option 2</Nav.Link>
        </Nav.Item>
      </Nav>

      <CSSTransition in={스위치} classNames='wow' timeout={2000}>
        <Tab 누른탭={누른탭} 스위치변경={스위치변경}></Tab>
      </CSSTransition>
    
    </div> 
    );
}

function Tab(props){

  // 컴포넌트가 로드가 될때
  useEffect(()=>{
    props.스위치변경(true); 
  })

  if (props.누른탭 === 0){
    return (
      <div>0번째 탭 내용임 ㅅㄱ</div>
    );
  }else if(props.누른탭 === 1){
    return (
      <div>1번째 탭 내용임 ㅅㄱ</div> 
    );
  }else if(props.누른탭 === 2){
    return (
      <div>2번째 탭 내용임 ㅅㄱ</div>
    );
  }
}

function Info(props){
  return (
    <p>여기는 3중 props를 사용한 재고 : { props.재고[props.찾은상품.id] } </p>
  );
}

export default Detail; 