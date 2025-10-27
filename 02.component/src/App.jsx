import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './Menu'
import Member from './Member'

function App() {
  const [count, setCount] = useState(0)

  let temp = 'ice'

  let team = '무한도전'

  // 객체 비구조화 할당
  let student = {
    name : '임승환',
    age : 20,
    sub : 'web'
  }

  console.log(student)

  let { name, age, sub } = student
  console.log(name, age, sub)
  
  let menuArray = ["아메리카노","카페라떼","에이드","프라페"]

  return (
    <>
      {menuArray}

{/* map 함수 : 배열이 가지고있는 데이터(요소) 한번씩 접근해서 컴포넌트를 통해 출력하는방법  */}
{/* 기존 배열의 데이터를 새로운 배열로 만드는 방법 */}
      {menuArray.map((data, index)=>
        <Menu menu={data} key={index}></Menu>
      )}
      
      {/* {
      [<Menu menu="test1"></Menu>, 
      <Menu menu="test1"></Menu>,
      <Menu menu="test1"></Menu>,
      <Menu menu="test1"></Menu> ]
      } */}
      {/* <Menu temp={temp} menu={menuArray[0]} price="4100"></Menu>
      <Menu temp={temp} menu={menuArray[1]} price="4600"></Menu>
      <Menu menu={menuArray[2]} price='5000'></Menu>
      <Menu menu={menuArray[3]} price='5000'></Menu> */}
      <hr></hr>
      {/* <Member teamName={team} personName='유재석'></Member>
      <Member teamName={team} personName='박명수'></Member>
      <Member teamName={team} personName='정준하'></Member>
      <Member teamName={team} personName='정형돈'></Member> */}
    </>
  )
}

export default App
