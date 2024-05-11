import React from 'react'
import './Global.css';
import { Link } from 'react-router-dom';
import Button from './Button';
function Contact() {
  return (
	 <div>
		 <section className="section1">
        <div className=' p-32'>
			<div className=' flex items-center justify-center flex-col p-10'> 
          <h1 className=" m-28 z-20 text-white  text-9xl font-light  text-center">
		  Our services
          </h1>
		  <p className=' text-white font-normal w-80'>We offer more than services. Our agency provides solutions to your top-priority concerns, involving customer targeting, email performance and sales growth. If there is no existing solution readily available, we create one, specifically to suit your business.</p>
			 <div className=' flex items-center justify-center'>
			</div>
        <div className=' flex items-center justify-center gap-10 p-10'>

		  <Link to="/contact">
            <Button
				width= '180px'
				text="Start now"
				back="none"
				bor='1px solid #fff'
				color="white"
				></Button>
          </Link>
			 <div className=' text-white'>
				<h3>Call us </h3>
				<p>(405) 555-0128</p>
			 </div>
				</div>
				</div>
        </div>
      </section>

	 </div>
  )
}

export default Contact
