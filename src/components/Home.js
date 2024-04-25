import React from 'react'
import Button from './Button'
import './Global.css';
import './home.css';
import img1 from './images/image.png'
import { Link } from 'react-router-dom';
function Home() {
  return (
	<>
		<section className='section1'>
			<div>
			<h1 className=' m-28 z-20 text-white  text-6xl w-48  text-center'>Best SEO & Marketing Solutions for You</h1>
			<Link to='careers'>	
			<Button text="Talk to a human" back="#7772F1" color="white"></Button>
			</Link>
			</div>
			<div>
				<img src=''/>
			</div>
		</section>
		<section className='m-10 w-full h-auto p-16 flex justify-center'>
			<p className='text-3xl w-64 text-right'>
			Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance
			 data and market research. We create science-based SEO strategies to empower our clients.
			</p>
		</section>
		<section className=' flex items-center justify-center  p-32'>
			<div className=' flex flex-col  justify-center items-center gap-11'>
				<h2 className=' text-center text-5xl'>Createx Agency </h2>
				<p className=' w-2/3 text-center'>Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orci.</p>
				<Link to='about'>	
			<Button text="More about us" back="#7772F1" color="white"></Button>
			</Link>
			</div>
			<div className=' w-3/6'>
				<img className='w-full' src={img1}/>
			</div>
		</section>
	</>

  )
}

export default Home
