import React from 'react'
import './basic.css'

const basic = () => {
  // 1. 경로 확인 하기
  // 2. 서버 끄기 => Ctrl + C
  // 3. 페이지 띄우기 => npm run dev
  // 4. Ctrl + 주소값
  
  // JSX문법 특징
  // 하나의 파일안에 HTML과 JS를 동시에 작성 가능
  // 가독성이 좋고, 작성이 쉬움

  // 여러개의 요소가 존재한다면 반드시 하나의 부모요소로 감싸줄 것
  // => 이 때, 꼭 div태그가 아니어도 가능 (<> </>)

  // 기존 class 속성 대신 className 속성을 사용
  // 태그를 작성할 때 소문자로 작성! => 대문자는 컴포넌트로 인식
  // 이벤트 타입 문법이 다름 => 기존 JS : onclick , React : onClick

  // 표현식 사용 가능
  // return 부분에서 변수 사용시 {} 활용
  // JS문법을 사용하려면 {} 활용 => 단 if문은 불가

  let msg = "Hello React";

  // 만약 조건이 하나라면
  let isLogin = false;
  let name = '김민수';

  // 조건이 3개이상일 때
  let text = '';

  if(name === '임승환'){
    text = 'java';
  }else if(name === '양상권'){
    text = 'React';
  }else{
    text = 'db';
  }

  // css 적용
  // 객체형태로 삽입
  // style속성 내 객체형태로 바로 적용
  const welStyle = {
    fontSize : '30px',
    color : 'red',
    backgroundColor : 'yellow'
  }

  return (
    <div>
      <div className='item'style="color:red;">JSX 문법</div>
      <div style={welStyle}>123</div>
      <div style={{color : 'blue', fontSize : '26px'}}>style</div>
      <div>{msg}</div>

      {/* 조건부 렌더링 */}
      {/* 조건식이 하나일 때 */}
      {isLogin && "환영합니다~"}

      {/* 조건식이 두개일 때 - 삼항연산자를 이용*/}
      {name === '양상권' ? <p>정답입니다!</p> : <p>거짓입니다!</p>}

      {/* 조건식이 세개이상일 때 - 조건식을 만든 후 결과만 출력 */}
      {text}

      <p>
        <button onDoubleClick={()=>{alert('마우스클릭 실행!')}}>클릭</button>
      </p>
    </div>
  )
}

export default basic
