import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
//BrowserRouter : Router 기능 사용하게끔 허용!

createRoot(document.getElementById('root')).render(
    <App />
  ,
)
