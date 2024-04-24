import React from 'react'
import './Global.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
	 <div className=' w-full bg-[#1E212C] h-2/5 p-20 flex justify-center items-center gap-52'>
		<div className=' gap-10'>
		<Link  className='flex items-center' to='/'>
			<h3 className=' text-2xl text-white'>CREATE</h3>
			<h3 className=' text-5xl text-[#7772F1]'>X</h3>
			</Link>
			<p className='text-white w-52'>
			Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through
			 a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.
			</p>
		
		</div>
		<div>
			<div className='text-white'>
				<h3>CONTACT US</h3>
					<p>Phone-(405) 555-0128</p>
					<p>email-hello@createx.com</p>
			</div>
			<div></div>
			<div></div>
		</div>
	 </div>
  )
}

export default Footer