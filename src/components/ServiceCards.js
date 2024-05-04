import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";
function ServiceCards(props) {
  if (props.bul == true) {
    return (
        <section className=" flex items-center">
          <img src={props.img} />
        <div>
        <h2 className=" p-10 text-4xl">{props.title}</h2>
           <p className=" p-6 font-light">{props.text}</p>
   
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
         </section>
    );
  } else {
    return (
      <section className=" flex items-center">
     <div>
     <h2 className=" p-10 text-4xl">{props.title}</h2>
        <p className=" p-6 font-light">{props.text}</p>

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
        <img src={props.img} />
      </section>
    );
  }
}

export default ServiceCards;
