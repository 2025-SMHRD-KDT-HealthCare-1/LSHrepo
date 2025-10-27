import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './example/Ex02'
// import App from './example/Ex03'
// import App from './example/ExNumber'
// import App from './example/Ex04useRef'
// import App from './example/Ex06'
// import App from './example/Ex07'
// import App from './example/Ex08'
// import App from './example/Ex05map';
// import App from './example/Ex09';
import App from './example/ExDiceGame'


createRoot(document.getElementById('root')).render(

  // <StrictMode>
    <App/>
  // </StrictMode>,
)
