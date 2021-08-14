import React, { useState } from 'react'; 
import { useHistory } from 'react-router-dom'; 

function Detail(){

    let history = useHistory(); 
    // 방문 기록을 저장해 놓는 Object

    return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="이미지파일/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">상품명</h4>
          <p>상품설명</p>
          <p>120000원</p>
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