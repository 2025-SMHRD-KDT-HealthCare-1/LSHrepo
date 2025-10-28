import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home'
import About from './component/About'
import {Route, Routes, BrowserRouter} from 'react-router-dom'

//Router : 주소값에 따라 다른 컴포넌트를 출력하는 방법

//Route : 컴포넌트에 주소값을 대응 시키는 기능 
//Routes : Route를 통해 사용한 주소값을 관리 
function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route> 
      </Routes> 
    </BrowserRouter> 
    </>
  )
}

export default App
