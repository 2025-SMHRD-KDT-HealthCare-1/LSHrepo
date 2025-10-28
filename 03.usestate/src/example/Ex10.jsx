import React from 'react'
import ClassComponent from '../components/ClassComponent'
import { useState } from 'react';

const Ex10 = () => {
    const [isShow, setIsShow] = useState(true);

  return (
    <div>
        <h1>React 생명주기(클래스 컴포넌트)</h1>
        <button onClick={() => setIsShow(!isShow)}>Show Toggle</button>
        {/* 
            && 연산자를 활용한 조건부 렌더링
             : && 연산자 앞에 있는 조건이 true면 뒤에 있는 컴포넌트를 렌더링한다!
         */}
        {isShow && <ClassComponent />}
    </div>
  )
}

export default Ex10