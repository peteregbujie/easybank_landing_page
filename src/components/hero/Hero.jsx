import mockup from "../../assets/image-mockups.png";
import "./hero.css";

const Hero = () => (
 <section className="bg__gray">
  <div className="hero__wrapper">
   <div className="hero__left">
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

   <div className="hero__right center__img">
    <img src={mockup} alt="mockup" />
   </div>
  </div>
 </section>
);

export default Hero;
