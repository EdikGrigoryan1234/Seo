import React, { useEffect, useState } from "react";
import Button from "./Button";
import "./home.css";
import img1 from "./images/image.png";
import logo1 from "./images/logo1.jpg";
import logo2 from "./images/logo2.jpg";
import logo3 from "./images/logo3.jpg";
import logo4 from "./images/logo4.jpg";
import img2 from "./images/img2.png";
import { Link } from "react-router-dom";
import Section from "./Section";
import DropDown from "./DropDown";
import OurServices from "./OurServices";
import StudioCards from "./StudioCards";
import PricingCards from "./PricingCards";
import ClientSay from "./ClientSay";
function Home() {
	const [isOpen,setIsOpen]=useState(false)
	function opening() {
		if(this.innerHtml == '+') {	
			setIsOpen(false)
		}else{
			setIsOpen(true)
		}
	}
  return (
    <>
      <section className="section1">
        <div className=" flex flex-col justify-center items-center">
          <h1 className=" m-28 z-20 text-white  text-6xl  text-center">
            Best SEO & Marketing Solutions for You
          </h1>
          <Link to="/end">
            <Button
            padding='20px'
              text="Talk to a human"
              back="#7772F1"
              color="white"
            ></Button>
          </Link>
        </div>
      </section>
      <section className="m-10 w-full h-auto p-16 flex justify-center gap-14">
        <p className="text-3xl w-64 text-right">
          Createx SEO Agency is a full-service digital marketing agency. We help
          businesses make more money through a wealth of performance data and
          market research. We create science-based SEO strategies to empower our
          clients.
        </p>
        <div className=" flex flex-wrap w-2/5 gap-10">
          <div className=" flex items-center justify-center ">
            <img src={logo1} />
            <p className=" w-40 text-center">
              Top SEO Companies 2020 by Clutch
            </p>
          </div>
          <div className=" flex items-center justify-center ">
            <img src={logo2} />
            <p className=" w-40 text-center">
              Top Digital Marketing Agency 2019 by UpCity
            </p>
          </div>
          <div className=" flex items-center justify-center ">
            <img src={logo3} />
            <p className=" w-40 text-center">
              Top SEO Companies 2020 by Top Developers
            </p>
          </div>
          <div className=" flex items-center justify-center ">
            <img src={logo4} />
            <p className=" w-40 text-center">
              Official Member 2020 by Forbes Agency Council
            </p>
          </div>
        </div>
      </section>
      <section className=" flex items-center justify-center  p-32">
        <div className=" flex flex-col  justify-center items-center gap-11">
          <h2 className=" text-center text-5xl text-black">Createx Agency </h2>
          <p className=" w-2/3 text-center">
            Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes,
            viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit
            diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor
            ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus,
            pharetra, tristique libero. Dolor risus ac quam dictum mattis
            ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et quis
            hendrerit. Cras at ac magna ultricies orci.
          </p>
          <Link to="about">
            <Button text="More about us" back="#7772F1" color="white"></Button>
          </Link>
        </div>
        <img className=" w-4/6 h-4/6" src={img1} />
      </section>
		<OurServices/>
		<Section></Section>
		<section className=" flex justify-start gap-12 text-left p-12 items-center flex-col">
			<h1 className=" text-5xl">Freequently Ask Questions</h1>
			<DropDown content='Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.' text='Aliquet lectus urna viverra in odio?'/>
			<DropDown content='Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.' text='Orci commodo, viverra orci mollis ut euismod?'/>
			<DropDown content='Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.' text='Sagittis vitae facilisi rutrum amet mauris quisque vel convallis?'/>
			<DropDown content='Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.' text='In id dolor quis nunc, urna hendrerit pharetra?'/>
			<Link to="about">
            <Button text="Discover more" back="#7772F1" color="white"></Button>
          </Link>
		</section>
    <StudioCards/>
    <PricingCards/>
    <ClientSay/>
    </>
  );
}

export default Home;
