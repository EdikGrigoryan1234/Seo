import React from 'react'

import { Link } from 'react-router-dom';
import Button from './Button';
import tellIcon from './images/iPhone.jpg'
import "./home.css";
import Section from './Section';
import OurServices from './OurServices';
import ServiceCards from './ServiceCards';
import img1 from './images/img2.png'
import img2 from './images/illustration.jpg'
import img3 from './images/illustration2.jpg'
import img4 from './images/illustration3.jpg'
import img5 from './images/illustration4.jpg'
import icon1 from './images/ic-cart1.jpg'
import icon2 from './images/ic-website.jpg'
import icon3 from './images/ic-suitcase.jpg'
import icon4 from './images/ic-startup.jpg'
import StudioCards from './StudioCards';
import ServicesIcons from './ServiceIcons';
function Services() {
  return (
	 <>
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

		  <Link to="/service">
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
	<section className=' gap-44'>
		<div className=' p-10'>
		<ServiceCards
		img={img1}
		bul={true} 
		title='Social Media Marketing'
		text='Elementum ipsum lorem tortor morbi quis turpis pellentesque ultrices aenean. Lacus sit viverra et egestas nisl vitae lacus, eget. Eu pulvinar duis in posuere non adipiscing.
                     Nunc, tristique viverra tincidunt nec proin tempus egestas massa. Quis velit nunc nisl sem in tristique.'
					
					 />
		<ServiceCards
		img={img2}
		bul={false} 
		title='Social Media Marketing'
		text='Elementum ipsum lorem tortor morbi quis turpis pellentesque ultrices aenean. Lacus sit viverra et egestas nisl vitae lacus, eget. Eu pulvinar duis in posuere non adipiscing.
                     Nunc, tristique viverra tincidunt nec proin tempus egestas massa. Quis velit nunc nisl sem in tristique.'
					
					 />
		<ServiceCards
		img={img3}
		bul={true} 
		title='Social Media Marketing'
		text='Elementum ipsum lorem tortor morbi quis turpis pellentesque ultrices aenean. Lacus sit viverra et egestas nisl vitae lacus, eget. Eu pulvinar duis in posuere non adipiscing.
                     Nunc, tristique viverra tincidunt nec proin tempus egestas massa. Quis velit nunc nisl sem in tristique.'
					
					 />
		<ServiceCards
		img={img4}
		bul={false} 
		title='Social Media Marketing'
		text='Elementum ipsum lorem tortor morbi quis turpis pellentesque ultrices aenean. Lacus sit viverra et egestas nisl vitae lacus, eget. Eu pulvinar duis in posuere non adipiscing.
                     Nunc, tristique viverra tincidunt nec proin tempus egestas massa. Quis velit nunc nisl sem in tristique.'
					
					 />
		<ServiceCards
		img={img5}
		bul={true} 
		title='Social Media Marketing'
		text='Elementum ipsum lorem tortor morbi quis turpis pellentesque ultrices aenean. Lacus sit viverra et egestas nisl vitae lacus, eget. Eu pulvinar duis in posuere non adipiscing.
                     Nunc, tristique viverra tincidunt nec proin tempus egestas massa. Quis velit nunc nisl sem in tristique.'
					
		/>
		</div>
	</section>
	<Section></Section>
	<StudioCards/>
	<section className=' p-20 gap-10'>
		<h1 className=' text-5xl'>Markets in which we operate</h1>
		<div className=' flex gap-10 p-36'>
		<ServicesIcons img={icon1} title='E-commerce Websites' text ='Aenean urna dictum adipiscing nec, cras quisque. Nunc in mauris. '/>
		<ServicesIcons img={icon2} title='Content-rich Websites' text ='Culpa nostrud commodo ea consequat reprehenderit aliquip. '/>
		<ServicesIcons img={icon3} title='B2B /B2C Services' text ='Viverra scelerisque consequat net. Adipisicing esse consequat. '/>
		<ServicesIcons img={icon4} title='Startup Projects' text ='Aute eiusmod dolore dolore deserunt veniam ad deserunt. '/>
		</div>
	</section>
	 <StudioCards/>
	 </>
  )
}

export default Services
