import React from 'react'
import {Link} from 'react-router-dom'

const Login = () => {

  //사용자가 입력한 ID : smhrd , PW : 123
  //일때만 Home 으로 이동
  //둘중 하나라도 다르다면 '잘못 입력했습니다' 알림 출력
  
  return (
    <div>
        <h1>Login Page</h1>
        ID : <input></input>
        <br></br>
        PW : <input></input>
        <button>
          <Link to="/">Login</Link>
        </button>
    </div>
  )
}

export default Login