import React from "react";
import { Services } from "../../constants";
import FeatureCard from "../featureCard/FeatureCard";
import "./features.css";

const Features = () => {
 return (
  <section className="bg-2 ">
   <div className="wrapper pd">
    <div className="features">
     <h2>Why choose EasyBank?</h2>
     <p>
      We leverage Open Banking to turn your bank account into your financial
      hub.
      <br />
      Control your finances like never before.
     </p>
    </div>
    <div className="services">
     {Services.map((service, index) => (
      <FeatureCard key={service.title} {...service} index={index} />
     ))}
    </div>
   </div>
  </section>
 );
};

export default Features;
