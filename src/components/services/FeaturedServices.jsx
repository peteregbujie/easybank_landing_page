import React from "react";
import { ServicesData } from "../../constants";
import Service from "../service/Service";
import "./services.css";

const FeaturedServices = () => (
 <section className="bg-darker">
  <div className="wrapper paddingX">
   <div className="features">
    <h2>Why choose EasyBank?</h2>
    <p>
     We leverage Open Banking to turn your bank account into your financial hub.
     Control your finances like never before.
    </p>
   </div>
   <div className="services">
    {ServicesData.map((service, index) => (
     <Service key={service.title} {...service} index={index} />
    ))}
   </div>
  </div>
 </section>
);

export default FeaturedServices;
