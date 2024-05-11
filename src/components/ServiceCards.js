import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
function ServiceCards(props) {
  if (props.bul == true) {
    return (
        <section className=" m-32 gap-32 flex items-center">
       <div className=" w-2/6 h-2/6">
		    <img   className=" w-full h-full" src={props.img} />
		 </div>
        <div>
        <h2 className=" p-10 text-4xl">{props.title}</h2>
           <p className=" w-96 p-6 font-light">{props.text}</p>
   <div className=" flex">

             <Link to="/service">
               <Button
                 width="180px"
                 text="Learn more"
                 back="none"
                 bor="1px solid black"
                 color="black"
					  ></Button>
             </Link>
             <Link to="/end">
               <Button
                 width="180px"
                 text="Try SEO toolkit"
                 back="#7772F1"
                 bor="1px solid #fff"
                 color="white"
					  ></Button>
             </Link>
					  </div>
           </div>
         </section>
    );
  } else {
    return (
      <section className=" m-32 gap-36 flex items-center">
     <div>
     <h2 className=" p-10 text-4xl">{props.title}</h2>
        <p className=" w-96 p-6 font-light">{props.text}</p>
<div className=" flex">

          <Link to="/about">
            <Button
              width="180px"
              text="Learn more"
              back="none"
              bor="1px solid black"
              color="black"
				  ></Button>
          </Link>
          <Link to="/careers">
            <Button
              width="180px"
              text="Try SEO toolkit"
              back="#7772F1"
              bor="1px solid #fff"
              color="white"
				  ></Button>
          </Link>
				  </div>
        </div>
		  <div className=" w-2/5 h-2/6">
		    <img   className=" w-full h-full" src={props.img} />
		 </div>
      </section>
    );
  }
}

export default ServiceCards;
