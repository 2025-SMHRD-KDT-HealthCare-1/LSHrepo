import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu menu="아메리카노" price="4100"></Menu>
      <Menu menu="카페라떼" price="4600"></Menu>
    </>
  )
}

export default App
