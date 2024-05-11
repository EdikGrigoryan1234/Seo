import React from 'react'
import './Global.css';
import Button from './Button'
import { Link } from 'react-router-dom';
function Studio() {
  return (
	 <div>
	  <section className="section1">
        <div>
          <h1 className=" m-28 z-20 text-white  text-6xl  text-center">
            Best SEO & Marketing Solutions for You
          </h1>
          <Link to="careers">
            <Button
            padding='20px'
              text="Talk to a human"
              back="#7772F1"
              color="white"
            ></Button>
          </Link>
        </div>
      </section>
      </div>
  )
}

export default Studio
