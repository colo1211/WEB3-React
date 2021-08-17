import React, { useState } from 'react'; 
import { useHistory, useParams } from 'react-router-dom'; 
import styled from 'styled-components'; 

// 스타일 컴포넌트
let 박스 = styled.div`
  width : 100%;
  background-color : #eee;
`;
let 제목 = styled.h4`
  padding-top : 8px; 
  font-size : 30px;
  color : ${ props => props.색상 }
`;

function Detail(props){

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
        <제목 색상={'red'}>Detail Page</제목>
        <제목 색상={'blue'}>Detail Page</제목>
      </박스>
      <div className="row">
        <div className="col-md-6">
          <img src={'../이미지파일/shoes'+ (찾은상품.id+1) +'.jpg'} alt='dsa' width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <button className="btn btn-danger" onClick = {()=>{
            history.goBack(); 
          }}>뒤로가기</button> 
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
</div> 
    );
}

export default Detail; 