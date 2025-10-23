import React from 'react'
import { useState, useRef } from 'react'
//useRef : 하나의 컴포넌트에서 태그를 찾을 수 있는 기능
//        --> 태그 참조 변수 생성 기능

const Ex04useRef = () => {

    const [inputText, setInputText] = useState();
    const inputRef = useRef();

    const btnClick = () =>{
        //1. input태그에 적은값 가져오기
        //DOM : 태그 객체로 변환된 문서
        // let text = document.querySelector('input').value
        let text = inputRef.current.value
        //2. 가져온 값으로 inputText 값 바꿔주기
        setInputText(text)
    }

  return (
    <div>
        <input ref={inputRef}></input>
        <button onClick={btnClick}>출력</button>
        <h1>출력 : {inputText}</h1>
    </div>
  )
}

export default Ex04useRef