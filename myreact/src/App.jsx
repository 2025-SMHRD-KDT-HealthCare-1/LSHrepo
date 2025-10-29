import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './component/Home'
import Login from './component/Login'
import Join from './component/Join'
import {Route, Routes , BrowserRouter} from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/join' element={<Join></Join>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
