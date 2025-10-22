import React from 'react'

const Menu = (props) => {
    console.log(props)
    // {
    //     menu : '카페라떼',
    //     price: '4600'
    // }
  return (
    <div>
        <h1>{props.menu}</h1>
        <p>{props.price}</p>
    </div>
  )
}

export default Menu