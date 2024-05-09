import React from 'react'
import './Global.css';
import { Link } from 'react-router-dom';
import './service.css'
import img1 from './images/planshet.jpg'
import Button from './Button'
import ServiceCards from './ServiceCards';
import icon1 from './images/icon1.jpg'
import icon2 from './images/icon2.jpg'
import icon3 from './images/icon3.jpg'
import icon4 from './images/icon4.jpg'
import icon5 from './images/icon5.jpg'
function Service() {
  return (
	 <>
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
	 	<section className=' flex p-24 justify-center items-center'>
			<img src={img1} className=' w-96 h-96'/>
			<div className=' flex flex-col justify-center items-center'>
			<h1 className=" m-28 z-20 text-6xl font-light  text-center">
			We go above and beyond to ensure successful SEO
          </h1>
								<p className=' w-96 text-3x1'>Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam 
					dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis hendrerit. Cras at ac magna ultricies orci.</p>
			</div>
		</section>
		<section className=' flex flex-col justify-center items-center p-12'>
		<h1 className=" m-28 z-20 text-6xl font-light  text-center">
		SEO services include
          </h1>
				<div className=' flex flex-wrap w-4/6 justify-center gap-10 items-center'>
					<div className=' flex flex-col items-center justify-center gap-3 p-5'>
						<img src={icon1}/>
						<h3>SEO Strategy</h3>
						<p className=' w-64'>
						Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.
						</p>
					</div>
					<div className=' flex flex-col items-center justify-center gap-3 p-5'>
						<img src={icon2}/>
						<h3>Competitor Analysis</h3>
						<p className=' w-64'>
						Nulla id egestas accumsan consequat tincidunt. Urna nisi, nec sed massa pharetra duis ut porttitor.
						</p>
					</div>
					<div className=' flex flex-col items-center justify-center gap-3 p-5'>
						<img src={icon3}/>
						<h3>Technical Audit</h3>
						<p className=' w-64'>
						Congue viverra in quis urna lectus proin massa. Aliquam, justo nisl sed diam nibh vehicula.
						</p>
					</div>
					<div className=' flex flex-col items-center justify-center gap-3 p-5'>
						<img src={icon1}/>
						<h3>Content Strategy</h3>
						<p className=' w-64'>
						Posuere sed quam etiam semper id id euismod. Feugiat cras donec elementum interdum in.
						</p>
					</div>
					<div className=' flex flex-col items-center justify-center gap-3 p-5'>
						<img src={icon4}/>
						<h3>SEO Reports</h3>
						<p className=' w-64'>
						Congue phasellus est, amet sem bibendum sollicitudin arcu scelerisque senectus. Mauris, mus tincidunt a, nisi.
						</p>
					</div>
					<div className=' flex flex-col items-center justify-center gap-3 p-5'>
						<img src={icon5}/>
						<h3>SEO Strategy</h3>
						<p className=' w-64'>
						Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.
						</p>
					</div>
				</div>
		</section>
	 </>
  )
}

export default Service
