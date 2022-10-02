import React from "react";
import "./featureCard.css";

function FeatureCard({ title, text, img }) {
 return (
  <div className="featureCard">
   <img src={img} alt="" />
   <h3>{title}</h3>
   <p>{text}</p>
  </div>
 );
}

export default FeatureCard;
