import React from 'react'
import './Global.css';
import { Link } from 'react-router-dom';
import Button from './Button';
function About() {
  return (
	 <div>
	
	<section className="section1">
        <div className=' p-32'>
			<div className=' flex items-center justify-center flex-col p-10'> 
          <h1 className=" m-28 z-20 text-white  text-6xl font-light  text-center">
		  Search Engine Optimization
          </h1>
		  <p className=' text-white font-normal w-80'>Ipsum blandit etiam nunc vitae. Duis lobortis odio vel morbi dui pellentesque enim integer facilisi. Ultrices vitae tempor amet nec euismod non. </p>
			 <div className=' flex items-center justify-center'>
			</div>
        <div className=' flex items-center justify-center gap-10 p-10'>
	<input type='text' placeholder='http://yoursite.com' className=' w-80 text-center h-10 bg-none'/>
		  <Link to="/contact">
            <Button
				width= '180px'
				text="Start now"
				height='30px'
				back="none"
				bor='1px solid #fff'
				color="white"
				></Button>
          </Link>
				</div>
				</div>
        </div>
      </section>
	 </div>
  )
}

export default About