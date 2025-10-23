import React from 'react'
import { useState } from 'react';

const Ex03 = () => {

    const [myNum , setMyNum] = useState();
    const [comNum , setComNum] = useState();
    // const [result , setResult] = useState();
    //1. 버튼 클릭시 내가 선택 숫자를 출력
    const btnClick = (btnNum) =>{
        setMyNum(btnNum);

        let ranNum = parseInt(Math.random()*3)+1
        setComNum(ranNum)

        // if(btnNum==ranNum){
        //     setResult('정답')
        // }
        // else{
        //     setResult('땡')
        // }

        //////
    }
    //2. 버튼 클릭시 1~3사이 랜덤수 생성 후 출력
    //3. 사용자가 클릭한 숫자와 랜덤수를 비교 후 결과 출력

  return (
    <div>
        <button onClick={()=>btnClick(1)}>1</button>
        <button onClick={()=>btnClick(2)}>2</button>
        <button onClick={()=>btnClick(3)}>3</button>

        <div>
            <p>내가 입력한 숫자 : {myNum}</p>
            <p>컴퓨터 랜덤 숫자 : {comNum}</p>
            <p>결과 : {myNum == comNum ? "정답":'땡'}</p>
        </div>
    </div>
  )
}

export default Ex03