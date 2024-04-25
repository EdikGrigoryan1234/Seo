import React from 'react'
import './Global.css';
import Button from './Button';
import { Link } from 'react-router-dom';
function Header() {
  return (
	 <header className='absolute w-full h-1/5 p-11 flex justify-between items-center '>
		<div>
			<Link  className='flex items-center' to='/'>
			<h3 className=' text-2xl text-white'>CREATE</h3>
			<h3 className=' text-5xl text-[#7772F1]'>X</h3>
			</Link>
		</div>
		<nav className=' flex items-center gap-10'>
			<ul className='flex gap-10 text-white'>
				<li><Link to='/services' className=' text-lg font-light cursor-pointer'>Services</Link></li>
				<li><Link to='/studio' className=' text-lg font-light cursor-pointer'>Case Studies</Link></li>
				<li><Link to='/about' className=' text-lg font-light cursor-pointer'>About Us</Link></li>
				<li><Link to='/blog' className=' text-lg font-light cursor-pointer'>Blog</Link></li>
				<li><Link to='/contact' className=' text-lg font-light cursor-pointer'>Contacts</Link></li>
			</ul>
				<Link to='/careers'>
			<Button text="Talk to a human" back="#7772F1" color="white">
				</Button>
				</Link>
		</nav>
	 </header>
  )
}

export default Header
