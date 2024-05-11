import React from 'react'
import "./home.css";
import Button from './Button';
import { Link } from 'react-router-dom';
function Section() {
  return (
	 <div className=' w-full h-1/6'>
			<section className="section2">
				<form >
					<h3 className=" text-4xl">Get a Free SEO Analysis!</h3>
					<div>
						<input  className="inpSec2"  type="text" placeholder="name"/>
						<input  className="inpSec2" type="text" placeholder="Surname"/>
					</div>
					<input className="inp3" type="text" placeholder="email"/>
					<div className=" flex pb-52 items-center justify-center">
					<p className=" w-40">	<input type="checkbox"/>   I agree to receive communications from Createx SEO Agency</p>
						<Link to='/end'>
					<Button color='#fff' text='Get' back="#1E212C" width="120px" bor="1px solid #fff"/>
						</Link>
					</div>
				</form>
		</section>
	 </div>
  )
}

export default Section
