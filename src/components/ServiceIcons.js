import React from 'react'

function ServicesIcons(props) {
  return (
    <div className=' flex flex-col justify-center items-center gap-10 '>
      <img src={props.img}/>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  )
}

export default ServicesIcons
