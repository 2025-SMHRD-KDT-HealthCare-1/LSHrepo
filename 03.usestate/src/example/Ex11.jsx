import React from 'react'
import FunctionComponent from '../components/FunctionComponent'
import { useState } from 'react'

const Ex11 = () => {
    const [isShow, setIsShow] = useState(true);

  return (
    <div>
        <h1>React 생명주기(함수형 컴포넌트)</h1>
        <button onClick={() => setIsShow(!isShow)}>Show Toggle</button>
        {isShow && <FunctionComponent />}
    </div>
  )
}

export default Ex11