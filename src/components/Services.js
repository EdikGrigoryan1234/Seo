import React from 'react'
import './Global.css';
import { Link } from 'react-router-dom';
import Button from './Button';
import tellIcon from './images/iPhone.jpg'
import "./home.css";
function Services() {
  return (
	 <div>
		  <section className="section1">
        <div>
          <h1 className=" m-28 z-20 text-white  text-6xl  text-center">
            Best SEO  Marketing Solutions for You
          </h1>
			 <div>
          <Link to="/contact">
            <Button
				width= '180px'
				text="Start now"
				back="none"
				bor='1px solid #fff'
				color="white"
            ></Button>
          </Link>
			 <div>
				<h3>Call us</h3>
				<p></p>
			 </div>
				</div>
        </div>
      </section>
	 </div>
  )
}

export default Services
