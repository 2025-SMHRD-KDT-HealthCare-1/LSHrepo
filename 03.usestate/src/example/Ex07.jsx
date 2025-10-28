import React from 'react'
import { useState, useRef, useEffect } from 'react'

const Ex07 = () => {
  const [ranNum , setRanNum] = useState(parseInt(Math.random()*50)+1)
//   let ranNum = parseInt(Math.random()*50)+1
  console.log(ranNum)
  const [cnt , setCnt] = useState(10)

  const inputRef = useRef();
  const [result ,setResult] = useState();

  const ranbtn =()=>{  
    let inputNum = inputRef.current.value

    if(inputNum>ranNum){
        setResult('더 작은 값을 입력')
        setCnt(cnt-1)
    }
    else if(inputNum<ranNum){
        setResult('더 큰 값을 입력')
        setCnt(cnt-1)
    }
    else{
        setResult('정답!')
    }

   
  }

  useEffect(()=>{
      if(cnt==0){
        alert("기회 없음")
      }
  } , [cnt])

  return (
    <div>
        <h1>1~50사이 랜덤수 맞추기</h1>
        <p>기회 : {cnt}</p>
        <input ref={inputRef}></input>
        <button onClick={ranbtn}>추측</button>
        <p>{result}</p>
    </div>
  )
}

export default Ex07