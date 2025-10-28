import React from 'react'
import { useEffect } from 'react';
// useEffect : 맨처음(Mount) , 화면 변경(Update) 때 실행하는 기능
import { useState } from 'react';

const FunctionComponent = () => {
    // 1. 생성자를 대체 (state, 변수, 함수 선언 등)
    //   : 화면을 구성하기 위한 준비물들을 선언
    console.log("1. constuctor 대체");
    const [num, setNum] = useState(0);
    const [num2 , setNum2] = useState(0);

    // 3. 화면 Mount 대체
    // useEffect(콜백함수, 빈배열)
    // 2번째 인자값으로 받는 의존성배열을 비워두면, componentDidMount의 역할을 대체!
    // API call, 무거운 데이터 읽기
    useEffect(() => {
        console.log("3. 화면 Mount 완료!");

        // const timer = setInterval(() => {
        //     console.log("1초마다 실행");
        //     // setNum(prev => prev + 1);
        // }, 1000);

        // // 5. 화면 Unmount 대체
        // // useEffect(콜백함수, 빈배열) => 콜백함수의 return문에 함수의 형태로 실행
        // // componentWillUnmount의 역할을 대체
        // // cleanup함수의 역할을 수행
        // return () => {
        //     clearInterval(timer);
        //     console.log("5. 컴포넌트 Unmount 대체");
        // }
    }, []);

    // 4. 값 update 대체
    // useEffect(콜백함수, [변화를 감지할 변수]);
    // - 첫 렌더링때에도 실행된다는 특징이 존재(componentDidUpdate와의 차이점)
    // - 변화를 감지하는 대상은 복수가 될 수 있다. (의존성 배열에 추가)
    useEffect(() => {
        console.log("4. 값 update 완료!");

        if(num==10){
            alert("목표숫자 도달!")
        }
    },[num]);

    const handleIncrement = () => {
        setNum(num + 1);
        setNum2(num2+2);     
    }

    const handleDecrement = () => {
        setNum(num - 1);
    }

    return (
        // 2. render함수를 대체
        <div>
            <h1>{num2}</h1>
            {console.log("2. render 대체")}
            <h1>Counter {num}</h1>
            <button onClick={handleIncrement}>+1</button>
            <button onClick={handleDecrement}>-1</button>
        </div>
    )
}

export default FunctionComponent