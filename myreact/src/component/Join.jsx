import React from 'react'
import {Link , useNavigate} from 'react-router-dom'
//useNavigate : 주소값을 바꿔서 다른 컴포넌트를 띄울 수 있는기능

import { useRef , useState} from 'react'

const Join = () => {

  //nav : 주소값을 바꿀 수 있는 변수로 사용 가능
  const nav = useNavigate();
  
  const inputIdRef = useRef();

  const [inputPw , setInputPw] = useState('')
  const [inputNick, setInputNick] = useState('')

  // ID, PW ,NICK 값을 전부 입력했을때만 페이지 이동 하고싶어요!
  const btnJoin=()=>{
    //사용자가 입력한 ID, PW ,NICK 값을 가져와주세요!
    const inputId = inputIdRef.current.value
    // inputPw
    // inputNick

    if(inputId!='' && inputPw!='' && inputNick!=''){
      //Login 페이지로 이동
      nav('/login')
      //http://localhost:5173/join/login
    }
    else{
      alert("빠진 값이 있습니다")
    }
  }
  return (
    <div>
        <h1>즐거운 React</h1>
        ID : <input ref={inputIdRef}></input>
        <br></br>
        {/* e : 이벤트 객체
          --> 이벤트에 따른 모든 정보가 담겨있다(어떤 태그로 발생 됬는지?, 어떤 이벤트로 발생 됬는지?)
          e.target : 이벤트를 발생시킨 주체(태그)
        */}
        Pw : <input onChange={(e)=>setInputPw(e.target.value)}></input>
        <br></br>
        NICK : <input onChange={(e)=>setInputNick(e.target.value)}></input>
        <br></br>
        <button onClick={btnJoin}>Join</button>
        {/* <button>
          <Link to="/login">Join</Link>
        </button> */}
        {/* <Link>
         <button>Join</button>
        </Link> */}
    </div>
  )
}

export default Join