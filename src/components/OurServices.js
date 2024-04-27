import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import img2 from './images/img2.png'
function OurServices() {
  return (
	 <div className='w-full'>
		  <section>
        <h1 className=" text-5xl">Our services</h1>
		  <div className=" flex items-center justify-center gap-14">

        <div className="">
          <h2 className=" m-12 text-4xl">Complete Worflow For Any SEO Professional</h2>
          <ul>
            <li>✔ Aenean enim tellus morbi nisl vulputate dictumst.</li>
            <li>✔ Nibh sapien volutpat lacus augue.</li>
            <li>✔ Vel in amet, placerat adipiscing est pharetra.</li>
            <li>✔ Gravida ornare sit in et ut sit sem id.</li>
            <li>✔ Ultrices pellentesque dictum enim egestas ac diam.</li>
            <li>✔ Sit semper enim senectus integer ut turpis et.</li>
          </ul>
          <div className=" m-12">
            <Link to="service" className=" m-11">
              <Button
                text="Try SEO toolkit"
                back="#7772F1"
                color="white"
              ></Button>
            </Link>
            <Link to="about">
              <Button
                text="More about us"
                back="#fff"
                color="#7772F1"
                bor="1px solid #7772F1"
					 ></Button>
            </Link>
          </div>
        </div>
        <img className=" object-cover" src={img2} />
			</div>
      </section>
	 </div>
  )
}

export default OurServices
