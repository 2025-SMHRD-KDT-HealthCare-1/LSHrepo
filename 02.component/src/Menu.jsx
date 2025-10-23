import React from 'react'

const Menu = ({temp, menu, price}) => {
  // let props = {
  //   temp : 'ice',
  //   menu : '아메리카노',
  //   price : '4000'
  // }
  console.log(temp, menu, price)
    // console.log(props)
    // {
    //     menu : '카페라떼',
    //     price: '4600'
    // }
  return (
    <div>
        {/* <h1>{props.temp} {props.menu}</h1>
        <p>{props.price}</p> */}
        <h1>{temp} {menu}</h1>
        <p>{price}</p>
    </div>
  )
}

export default Menu