import React from 'react'
import './newscard.css'
function NewsCard(props) {
  return (
    <div>
        <div class='card'>
  <div class='img-container'>
   
  </div>
  <div class='tags'>
    <ul>
      {
        props.tags.map((e)=>{
            return(
                <li>{e}</li>
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
