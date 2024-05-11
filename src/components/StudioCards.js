import React from 'react'
import logo1 from './images/client-logo.jpg'
import logo2 from './images/logo5.jpg'
import diogram1 from './images/diogaram.jpg'
import Button from './Button.js'
import "./studioCards.css";
import { Link } from 'react-router-dom'
function StudioCards() {
  return (
    <section className=' p-40 bg-[#F4F5F6]'>
      <h1 className=' text-5xl'>Read our clients' case studies</h1>
      <div className=' flex justify-center '>
        <div className='card' id='card3'>

            <h3>Charity organisation</h3>
            <div className=' w-full bg-slate-500 h-px'></div>
            <p>Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.</p>
        
        </div>
        <div id='card1' className='card'>
            {/* <h3>Dell Mar Strategy</h3>
            <div className=' w-full bg-slate-500 h-px'></div>
            <p>Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.</p> */}
            <div id='chunchurik'>
                
            </div>
        </div>
        <div id='card2' className='card'>
      
            <h3>Charity organisation</h3>
            <div className=' w-full bg-slate-500 h-px'></div>
				<p>Createx SEO Agency helped National Inc. increase their MQL to SQL conversion rate by 300%.</p>
        </div>
      </div>
      <div className=' flex w-full justify-center items-center gap-16'>
        <h2 className=' text-black text-4xl font-light'>Explore more case studies</h2>
       <div className=' flex justify-center items-center'>
       <Link to="careers">
            <Button
                width='150px'
                height='50px'
              text="View all case studies"
              back="#7772F1"
              color="white"
            ></Button>
          </Link>   
       </div>
      </div>
    </section>
  )
}

export default StudioCards
