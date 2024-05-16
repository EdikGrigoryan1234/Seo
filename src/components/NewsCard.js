import React from 'react'
import './newscard.css'
function NewsCard(props) {
  return (
    <div>
        <div className='card'>
  <div className='img-container'>
   
  </div>
  <div className='tags'>
    <ul>
      {
        props.tags.map((e,i)=>{
            return(
                <li key={i}>{e}</li>
            )
        })
      }
    </ul>
  </div>
  <h1>{props.title}</h1>
  <p>{props.text}</p>

</div>
    </div>
  )
}

export default NewsCard
