import React from "react";
import mockup from "../../assets/image-mockups.png";
import "./hero.css";

const Hero = () => {
 return (
  <section className="row-wrapper hero-bg">
   <div className="hero-left pd">
    <h2>
     Next generation
     <br /> <span>digital banking</span>
    </h2>
    <p>
     Take your financial life online. Your EasyBank account will be a one-stop
     shop fore spending, saving budgeting, investing and much more.
    </p>
    <button className="btn">Request Invite</button>
   </div>
   <div className="hero-right flx">
    <img src={mockup} alt="mockup" className="hero-image" />
   </div>
  </section>
 );
};

export default Hero;
