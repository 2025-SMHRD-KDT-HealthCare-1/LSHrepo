import React from 'react'
import { useState, useEffect } from 'react';

// let comScore2 = 0;
// let useScore2 = 0;

const ExDiceGame = () => {

    //1. 버튼 클릭시 주사위 이미지 랜덤하게 변경(둘다)
    //2. 주사위의 숫자를 비교> 더큰 Score 값을 +1 증가
    //3. score 값이 먼저 10에 도달한 결과를 출력
    //   >>"USER 승리" or "Com 승리"---> useEffect

    const [comNum ,setComNum] = useState(1)
    const [userNum  ,setUserNum] = useState(1)

    const [comScore ,setComScore] = useState(0)
    const [userScore, setUserScore] = useState(0)

    const [result, setResult] = useState('')

    const startGame = () =>{
        // comNum = 2;
        let comRanNum = parseInt(Math.random()*6)+1
        setComNum(comRanNum)

        let userRanNum = parseInt(Math.random()*6)+1
        setUserNum(userRanNum)

        if(comRanNum > userRanNum){
            setComScore(comScore+1)
        }
        else if(userRanNum>comRanNum){
            setUserScore(userScore+1)
        }
        ////useEffect 이용해서 만들어주세요!


        
    }
    //Mount + Update
    useEffect(()=>{
      if(comScore!=0){
      for(;;){

      }
      let test=""
      console.log("Test")
        if(comScore==10){
            setResult('COM WIN')
        }
        else if(userScore==10){
            setResult('USER WIN')
        }
      }
     
    }, [comScore, userScore])
    
    // let num=6
  return (
   <div>
      <h1>DICE GAME</h1>
      <button  onClick={startGame}>Start</button>

      <div >
        <img src={'./src/img/dice'+comNum+'.png'}></img>
        <h1>Com Score : {comScore}</h1>
      </div>
      <div >
        <img src={'./src/img/dice'+userNum+'.png'}></img>
        <h1>User Score : {userScore}</h1>
      </div>
        <h1>결과 : {result}</h1>
      {/* <h1>결과 : {comScore>userScore?  comScore==10? "컴퓨터 승리":"" : false}</h1> */}
    </div>
  )
}

export default ExDiceGame