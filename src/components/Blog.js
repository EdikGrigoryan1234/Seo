import React, { useEffect, useState } from 'react'
import './Global.css';
import './search.css';
import NewsCard from './NewsCard';
import Button from './Button'
import Section from './Section';
function Blog() {
	let tags = ['american','love','fiction','mystery','crime','classic','french','history','english','magical']
	const [data,setData] = useState([])
	const [text,setText] = useState('')
	const[timerId,setTimerId] = useState()
	let arr = data
	useEffect(()=>{
			setTimerId(
				setTimeout(()=>{
					clearTimeout(timerId)
					fetch("https://dummyjson.com/posts")
					.then((res) => res.json())
					.then((res) =>
						setData(
							res.posts.filter((e) =>
								e.title.trim().toLowerCase().startsWith(text.trim().toLowerCase())
						)
					)
				);
			},(1000))
			)
		},[text])
		return (
	<>
	 <section className=' flex gap-12  justify-between p-60 '>
			<div className=' flex gap-5 flex-col'>

						<h1 className=" z-20 text-6xl  text-center">
            Blog posts
          </h1>
		<div className=' gap-10 flex flex-wrap justify-center items-center'>
				{
				arr.map((e)=>{
						return(
							<NewsCard tags={e.tags} title={e.title} text={e.body}/>
						)
					})
				}
			</div>
		</div>
		<div>
			<div>
	
				<div>
				<div class="bg-gradient">
<input onChange={(val)=>setText(val.target.value)} class="input-transparent" type="text" placeholder="Search"/>
  </div>
					
				</div>
			</div>
		</div>
	 </section>
	<Section/>
	<div className=' w-full h-1'></div>
	</>
  )
}

export default Blog
//american,love,fiction,mystery,crime,classic,french,history,english,magical
	// <Button
								// padding='10px'
								//   text={e}
								//   back="#7772F1"
								//   color="white"
								//   efect={true}
								// ></Button>