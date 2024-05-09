import React, { useState } from 'react'
import './Global.css';
import NewsCard from './NewsCard';
function Blog() {
	const tags = ['american','love','fiction','mystery','crime','classic','french','history','english','magical']
	const [data,setData] = useState([])
	fetch('https://dummyjson.com/posts')
	.then((res)=>res.json())
	.then((res)=>setData(res.posts))
  return (
	 <section className=' flex justify-between p-10'>
		<div className='  p-28  gap-10 flex flex-wrap justify-center items-center'>
			{
				data.map((e)=>{
					return(
						<NewsCard tags={e.tags} text={e.body} title={e.title}/>
					)
				})
}
		</div>
		<div>
			<div>
				<h1 className=' text-6x1'>Blog Categories</h1>
			</div>
		</div>
	 </section>
  )
}

export default Blog
//american,love,fiction,mystery,crime,classic,french,history,english,magical
