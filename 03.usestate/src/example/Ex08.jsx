import React from 'react'
import pic from '../img/img1.png'
import pic2 from '../img/img1.png'
import { useState } from 'react'

const Ex08 = () => {
    let imgArray = ['./src/img/pika.png', './src/img/chico.png' , './src/img/zam.png']
    //let pos=0;
    const [pos ,setPos] = useState(0)

    const [mySrc ,setSrc] = useState('./src/img/pika.png')

    const chImg = () =>{
        if(pos==2){
            setPos(0)
        }else{
            setPos(pos+1) 
        }
      
       //pos = pos+1
        // pos++
       
        // setSrc('./src/img/chico.png')
    }

  return (
    <div>
        <img src={imgArray[pos]}></img>
        <button>이전</button>
        <button onClick={chImg}>다음</button>
    </div>
  )
}

export default Ex08