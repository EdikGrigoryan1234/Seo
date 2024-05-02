import React, { useState } from 'react'

function LastestNews() {
    const [data,setData] = useState([])
    fetch('https://dummyjson.com/posts').then((res)=>res.json()).then(setData(res.posts))
    return (
    <div>
      
    </div>
  )
}

export default LastestNews
